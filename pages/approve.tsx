/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowDownIcon, ArrowUpIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { Button, Table, Tooltip } from '@mantine/core';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import toast, { Toaster } from 'react-hot-toast';

import React from 'react';
//@ts-ignore
import { Registration } from '@prisma/client';
import axios from 'axios';
import { capitalCase } from 'capital-case';
import { firebaseAdmin } from '../lib/firebaseAdmin';
import nookies from "nookies"
import prisma from '../lib/pris';
import { useRouter } from 'next/router';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email, superAdmin, email_verified, name } = token;
    let reg = await prisma.registration.findMany()
    const Sreg = JSON.stringify(reg)
    let user = {
      uid,
      email,
      email_verified,
      name,
      token,
      superAdmin: superAdmin ? true : false,
    }
    if (token.superAdmin === true) {
      return { props: { user, Sreg } };
    }
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  }
};


function dashboard(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [flag, setFlag] = React.useState(false);

  const router = useRouter()
  const approveReg = async (id: string) => {

    try {
      await axios.put('/api/reg/approve', { id }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      router.reload()
    } catch (err) {
      console.log(err)
    }
  }




  const reg = JSON.parse(props.Sreg) as Registration[]

  const TableHeaders: Array<keyof Registration> = ["name", "email", "phone", "college", "createdAt", "paymentStatus", "paymentAmount", "paymentInfo", "approved"]


  return (
    <>
      <Toaster />
      <div className="min-h-screen">
        <h2 className="bg-gradient-to-r from-teal-400 via-blue-500 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent lg:text-5xl">
          Approve Registrations
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table
            horizontalSpacing="sm"
            fontSize="md"
            striped
            highlightOnHover
            captionSide="bottom"
          >
            <thead>
              <tr>
                {TableHeaders.map((header) => (
                  <>
                    <td
                      key={header as string}
                      className="flex-wrap text-center select-none"
                    >
                      {header === "createdAt" ? (
                        <div className="flex flex-row items-center">
                          {capitalCase(header)}
                          {!flag ? <ArrowDownIcon className="h-4 w-4 text-gray-400 font-extrabold cursor-pointer" onClick={() => setFlag(flag => !flag)} /> : <ArrowUpIcon className="h-4 w-4 text-gray-400 font-extrabold cursor-pointer" onClick={() => setFlag(flag => !flag)} />}
                        </div>
                      ) : (<div>{capitalCase(header as string)}</div>)}
                    </td>
                  </>
                ))}
                <td
                  className="flex-wrap items-center select-none"
                >
                  Total Number of Reg People
                </td>
              </tr>
            </thead>
            <tbody>
              {reg.length > 0 &&
                reg?.sort((a, b) => flag ? new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf() : new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()).map((data) => (
                  <tr key={data.id}>
                    {TableHeaders.map((header) => (
                      <td
                        key={data.id!.toString() + data[header]}
                        className="text-center"
                      >
                        {header === "createdAt" ? (
                          <div className="break-words w-[150px]">
                            {new Date(data[header]).toLocaleDateString()}
                          </div>
                        ) :
                          header === "approved" ? (
                            <div className="flex flex-row items-center">
                              {data[header] ? (
                                <div className='p-2 bg-green-600 font-semibold text-white rounded-lg'>
                                  Approved
                                </div>
                              ) : (
                                <div className='p-2 bg-red-600 font-semibold text-white rounded-lg'>
                                  Not Approved
                                </div>
                              )}
                            </div>
                          ) :
                            header === "paymentInfo" ? (
                              <div className="flex flex-row items-center">
                                {data[header] && (
                                  <a href={data[header]} target="_blank" rel="noreferrer">
                                    <Button>
                                      Link to Receipt
                                    </Button>
                                  </a>
                                )
                                }
                              </div>
                            ) :
                              (<div className="break-words w-[150px]">{data[header] as string}</div>)}
                      </td>
                    ))}
                    <td className='text-center'>
                      <Tooltip label={`(${data.execomMemberNumber}-Execom Members ,${data.otherMembersIeeeNumbers.split(',').length}-Other)`} transition="slide-up" transitionDuration={300} transitionTimingFunction="ease">
                        <div>
                          {data.execomMemberNumber + data.otherMembersIeeeNumbers.split(',').length}
                        </div>
                      </Tooltip>
                    </td>
                    {props.user !== undefined && !data.approved && (
                      <td>
                        <div>
                          <Tooltip label="Approve" transition="slide-up" transitionDuration={300} transitionTimingFunction="ease">
                            <button
                              className="m-2 rounded-md bg-slate-50 p-1 text-green-500 hover:underline md:m-0"
                              onClick={async () => {
                                toast.promise(approveReg(data.id), {
                                  error: "Something went Wrong",
                                  success: "Approved Successfully",
                                  loading: "loading...",
                                })
                              }}
                            >
                              <Button color="green">
                                <CheckCircleIcon className="h-6 w-6" />
                              </Button>
                            </button>
                          </Tooltip>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
            <caption>
              <ul>
                <li>
                  <span>Total Number of Regs:</span>
                  <span className="ml-2 text-indigo-500 font-semibold">{reg.length}</span>
                </li>
                <li>
                  <span>Total Number of People:</span>
                  <span className="ml-2 text-indigo-500 font-semibold">
                    {reg.length > 0 && (
                      reg.map(re => {
                        return re.execomMemberNumber + re.otherMembersIeeeNumbers.split(',').length
                      })
                    )}
                  </span>
                </li>
                <li>
                  Click on the arrow to sort the table (latest first)
                </li>
                <li>
                  Click on the Green CheckBox to approve the registration after Verifying the payment
                </li>
                <li>
                  If the payment is not verified, try to contact the respective person through Whatsapp
                </li>
              </ul>
            </caption>
          </Table>
        </div>
      </div></>
  )
}

export default dashboard