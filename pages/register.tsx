/* eslint-disable @next/next/no-img-element */
import { Alert, Box, Button, Checkbox, Group, Input, NumberInput, TextInput } from "@mantine/core";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import toast, { Toaster } from "react-hot-toast";

import Link from "next/link";
import { Storage } from "../lib/firebaseClient";
import axios from "axios";
import { firebase } from "../lib/firebaseClient";
import { firebaseAdmin } from "../lib/firebaseAdmin";
import nookies from "nookies";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email, superAdmin, alreadyReg, email_verified, name } = token;
    let user = {
      uid,
      email,
      email_verified,
      name,
      token,
      superAdmin: superAdmin ? true : false,
      alreadyReg: alreadyReg ? true : false,
    }
    return { props: { user } };
  } catch (err) {
    return {
      props: {} as never
    };
  }
};

function Register(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [loading, setLoading] = React.useState(false);
  const [link, setLink] = React.useState("");
  const router = useRouter()
  const form = useForm({
    initialValues: {
      fullName: props.user ? props.user.name : "",
      email: props.user ? props.user.email : "",
      phoneNumber: "",
      ieeeMemNo: "",
      exeComIeeeName: "",
      college: "",
      noOfExecom: 0,
      exeComIeeeNo: "",
      anyOtherMembers: false,
      otherMembers: "",
      otherIeeeName: "",
      screenshot: ""
    },
    validate: {
      noOfExecom: (value: number) => {
        if (value < 0 && value > 0) {
          return "No of Execom cannot be less than 0 or greater than 4";
        }
        else {
          return null;
        }
      },
      screenshot: (value: string) => {
        if (!value) {
          return "Please upload a screenshot";
        }
        else {
          return null;
        }
      },
    }
  });

  const submitForm = async (values: typeof form.values): Promise<void> => {
    try {
      setLoading(true);
      await createUpload();
      const data = { ...values, link, paymentAmount: calculateAmount(values) };
      console.log(JSON.stringify(data, null, 2));
      await axios.post('/api/reg/add', data);
      setLoading(false);
      form.reset();
      setTimeout(() => {
        router.push(
          {
            pathname: "view",
            query: {
              email: values.email
            }
          }
        )
      }, 3000)
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  // { name: string; email: string; phone: string; college: string; ieeeNumber: string; execomMemberNumber: number; execomMemberNames: string; execomMemberIeeeNumbers: string; otherMembers: boolean; otherMembersNames: string; otherMembersIeeeNumbers: string; paymentInfo: string; paymentAmount: number; }

  const calculateAmount = (values: typeof form.values) => {
    let ammt;
    const numExe = values.anyOtherMembers ? values.otherIeeeName?.split(',').length : 0;
    ammt = (numExe * 50) + 250;
    return ammt;
  }
  const createUpload = async () => {
    const imageRef = await ref(
      Storage,
      `Payments/${Date.now()}-${file!.name}`
    );
    await uploadBytes(imageRef, file!)
      .then(() => {
        getDownloadURL(imageRef)
          .then(async (url) => {
            setLink(url);
            console.log(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
            throw new Error(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        throw new Error(error.message);
      });
  };
  const [file, setFile] = useState<File | null>(null);


  return (
    <>
      <Box className="flex min-w-fit flex-col items-center justify-center min-h-screen">
        <Toaster position="top-center" />
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Register to the Event
            </h1>
            {props.user?.alreadyReg && (<>
              <Alert
                color="yellow">
                You have already registered.
              </Alert>
              <div className="p-4">
                <Button
                  onClick={() => {
                    router.push(
                      '/')
                  }}
                  color="blue"
                  variant="outline"
                >
                  Go to Home
                </Button>
              </div>
            </>)}
            {!props.user ? (
              <>
                <Button onClick={async () => {
                  await (await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()))
                  router.reload();
                }}
                  className="mt-4"
                >
                  <img className="google-icon p-4" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google-logo" />
                  Login with Google to Fill the form
                </Button>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                  (Preferably IEEE mail)
                </p>
              </>
            ) : (null)}
            {props.user && !props.user?.alreadyReg && (<Box sx={{ maxWidth: 500 }} mx="auto">
              <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                You can register for the event by filling the form below.<br />
                A maximum of 4 Execom members of Computer Society are allowed.{" "}<span className="font-bold">(250/- per Execom Committee)</span><br />
                You can register more people who are volunteers in your respective student branches.{" "}<span className="font-bold">(50/- per head)</span><br />
              </p>
              <form
                className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
              >
                <TextInput
                  required
                  label="Full Name"
                  placeholder="Full Name"
                  type="text"
                  {...form.getInputProps("fullName")}
                />
                <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  {...form.getInputProps("email")}
                />
                <Input
                  required
                  placeholder="Phone Number"
                  type="tel"
                  {...form.getInputProps("phoneNumber")}
                />
                <TextInput
                  required
                  label="College Name"
                  placeholder="College Name"
                  {...form.getInputProps("college")}
                />
                <TextInput
                  required
                  mt="sm"
                  label="Your IEEE Membership Number"
                  placeholder="Your IEEE Membership Number"
                  {...form.getInputProps("ieeeMemNo")}
                />
                <NumberInput
                  required
                  mt="sm"
                  label="Number of Execom Members in Computer Society"
                  placeholder="n"
                  min={0}
                  max={4}
                  {...form.getInputProps("noOfExecom")}
                />
                {form.values.noOfExecom > 0 &&
                  (
                    <>
                      <TextInput
                        required
                        mt="sm"
                        label={`Execom Member's Name separated by comma`}
                        description="do not include your name"
                        {...form.getInputProps("exeComIeeeName")}
                      />
                      <TextInput
                        required
                        mt="sm"
                        label={`Execom Member's IEEE Membership Number separated by comma`}
                        description="do not include your Ieee Number"
                        {...form.getInputProps("exeComIeeeNo")}
                      />
                    </>
                  )}
                <Checkbox
                  mt="sm"
                  label="Are there any other members who would like to participate in the event ?"
                  {...form.getInputProps("anyOtherMembers")}
                />
                {form.values.anyOtherMembers && (
                  <>
                    <>
                      <TextInput
                        required
                        mt="sm"
                        label={`Other Volunteers IEEE Name separated by comma`}
                        {...form.getInputProps("otherIeeeName")}
                      />
                      <TextInput
                        required
                        mt="sm"
                        label={`Other Volunteers IEEE Membership Number separated by comma`}
                        {...form.getInputProps("otherMembers")}
                      />
                    </>
                  </>
                )}
                <Group position="center" className="text-sm text-gray-500">
                  <p>Pay {form.values.anyOtherMembers ? calculateAmount(form.values) : "250/-"} to this UPI account and upload the screenshot.</p>
                  <Link href="/login">
                    <a href="upi://pay?pa=8088732313@ybl&pn=Prajwal P&cu=INR">
                      <Button>
                        Pay using UPI
                      </Button>
                    </a>
                  </Link>{" "}
                </Group>
                <div className="mb-3 w-96">
                  <label
                    htmlFor="formFile"
                    className="form-label mb-2 inline-block text-gray-700"
                  >
                    Choose Image
                  </label>
                  <input
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    type="file"
                    id="formFile"
                    onChange={(e) => setFile(e.target.files![0])}
                  />
                </div>
                <Group position="center" mt="xl">
                  <Button type="submit" loading={loading} onClick={
                    async () =>
                      toast.promise(
                        submitForm(form.values),
                        {
                          error: (err) => {
                            console.log(err);
                            return "Error Occurred";
                          },
                          success: "Successfully Registered Confirmation Email will be sent shortly",
                          loading: "Registering",
                        }
                      )}>
                    Register
                  </Button>
                </Group>
              </form>
            </Box>)}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Register;