import React from "react";
import Header from "./Header";
import { useFormik } from "formik";
import { MdOutlineErrorOutline } from "react-icons/md";
import useValidate from "../utilis/useValidate";
import useInitialValues from "../utilis/useInitialValue";

const onSubmit = (values) => {
  console.log(values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 400);
};

const Main = () => {
  const {
    values,

    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: useInitialValues,
    onSubmit,

    validate: useValidate,
  });

  return (
    <div className="h-full w-screen bg-slate-100 ">
      <div className="">
        <div className="pt-20 px-24 shadow-lg bg-white text-black w-[60%]  mx-auto">
          <Header />
          <hr className="border-b-2 border-cyan-200 mt-8" />
          <h1 className="text-xl  font-semibold mt-6">Personal Information:</h1>
          <hr className="border-b-2 border-cyan-200 mt-5" />

          <form className="mx-auto w-[720px]" onSubmit={handleSubmit}>
            <div className=" mt-3">
              <label htmlFor="name" className="font-semibold text-lg">
                Full Name :
              </label>
              <div className=" justify-between align-middle mt-6 grid grid-cols-12">
                <div className="col-span-4 ">
                  <div className="">
                    <div className="flex">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="h-10 p-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <div className="-ml-7 mt-2">
                        {errors.firstName ? (
                          <div>
                            {
                              <MdOutlineErrorOutline className="text-2xl text-red-950" />
                            }
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <label htmlFor="First Name">{"First Name"}</label>
                  </div>
                </div>
                <div className="col-span-4">
                  <input
                    type="text"
                    name="mdlName"
                    id="mdlName"
                    className="h-10   p-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mdlName}
                  />
                  <br />
                  <label htmlFor="Last Name">Middle Name</label>
                </div>
                <div className="col-span-4">
                  <div className="flex">
                    <input
                      type="text"
                      name="lstName"
                      id="lstName"
                      className="h-10  p-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lstName}
                    />
                    <div className="-ml-7 mt-2">
                      {errors.lstName ? (
                        <div>
                          {
                            <MdOutlineErrorOutline className="text-2xl text-red-950" />
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <label htmlFor="Last Name">Last Name</label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="address" className="font-semibold text-lg ">
                Address
              </label>

              <div className="flex">
                <input
                  type="text"
                  name="address1"
                  id="address1"
                  className="h-10 w-full mt-6 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address1}
                />
                <div className="-ml-7 mt-8">
                  {errors.address1 ? (
                    <div>
                      {
                        <MdOutlineErrorOutline className="text-2xl text-red-950" />
                      }
                    </div>
                  ) : null}
                </div>
              </div>
              <label htmlFor="Street Address" className="pl-2">
                Street Address
              </label>
              <br />
              <div></div>
              <input
                type="text"
                name="address2"
                id="address2"
                className="h-10 w-full mt-6 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address2}
              />
              <label htmlFor="Street Address Line 2" className="pl-2">
                Street Address Line 2
              </label>

              <div className="mt-6 grid grid-cols-12  w-full">
                <div className="col-span-6">
                  <div className="flex">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 w-[345px] mr-3 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    <div className="-ml-10 mt-2">
                      {errors.city ? (
                        <div>
                          {
                            <MdOutlineErrorOutline className="text-2xl text-red-950" />
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <label htmlFor="City">City</label>
                </div>
                <div className="col-span-6">
                  <div className="flex">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="h-10 w-[360px] px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                    />
                    <div className="  -ml-7 mt-2">
                      {errors.state ? (
                        <div>
                          {
                            <MdOutlineErrorOutline className="text-2xl text-red-950" />
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <label htmlFor="Street Address Line 2">State</label>
                </div>
              </div>
              <div className="flex">
                <input
                  type="tel"
                  name="pinCode"
                  id="pinCode"
                  className="h-10 w-full mt-6 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pinCode}
                />
                <div className="  -ml-7 mt-8">
                  {errors.pinCode ? (
                    <div>
                      {
                        <MdOutlineErrorOutline className="text-2xl text-red-950" />
                      }
                    </div>
                  ) : null}
                </div>
              </div>

              <label htmlFor="Street Address Line 2">Pin code / Postal</label>
            </div>
            <div className="mt-8">
              <label htmlFor="phNumber" className="font-semibold text-lg mr-2">
                Phone Number
              </label>

              <div className="flex">
                <input
                  type="tel"
                  name="phNumber"
                  id="phNumber"
                  className="h-10 w-5/12 mt-4 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                  placeholder="(000) 000-0000"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phNumber}
                />
                <div className="  -ml-7 mt-6">
                  {errors.phNumber ? (
                    <div>
                      {
                        <MdOutlineErrorOutline className="text-2xl text-red-950" />
                      }
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="font-semibold text-lg mr-2">
                Email
              </label>{" "}
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="h-10 w-5/12 mt-4 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                  placeholder="ex: myname@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="  -ml-7 mt-6">
                  {errors.email ? (
                    <div>
                      {
                        <MdOutlineErrorOutline className="text-2xl text-red-950" />
                      }
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-xl font-semibold ">Education</h1>
              <hr className="border-x-2 border-slate-300 mt-3" />
              <h1 className="text-lg font-semibold mt-6"> Graduation</h1>

              <div className="mt-6 grid grid-cols-12  w-full">
                <div className="col-span-6">
                  <label htmlFor="grdClg">College</label> <br />
                  <div className="flex mr-4">
                    <input
                      type="text"
                      name="grdClg"
                      id="grdClg"
                      className="h-10 w-[350px] mt-2 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.grdClg}
                    />
                    <div className=" -ml-8 mt-4">
                      {errors.grdClg ? (
                        <div>
                          {
                            <MdOutlineErrorOutline className="text-2xl text-red-950" />
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-span-6 ml-3">
                  <label htmlFor="grdCource">Cource</label> <br />
                  <div className="flex">
                    <select
                      className="bg-white h-10 w-[340px]  mt-2 px-2 border-cyan-500 border-2 rounded-md"
                      name="grdCource"
                      id="grdCource"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.grdCource}
                    >
                      <option value="">--Please choose an option--</option>
                      <option value="B.E" name="B.E">
                        B.E
                      </option>
                      <option value="B.Tech" name="B.Tech">
                        B Tech
                      </option>
                      <option value="Degree" name="Degree">
                        Degree
                      </option>
                    </select>
                    <div className=" -ml-12 mt-4">
                      {errors.grdCource ? (
                        <div>
                          {
                            <MdOutlineErrorOutline className="text-2xl text-red-950" />
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-lg font-semibold mt-6"> Inter / Diploma</h1>
                <div className="mt-6">
                  <label htmlFor="inter/diploma college">College</label> <br />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    name="interClg"
                    id="interClg"
                    className="h-10 w-full mt-2 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.interClg}
                  />
                  <div className=" -ml-8 mt-4">
                    {errors.interClg ? (
                      <div>
                        {
                          <MdOutlineErrorOutline className="text-2xl text-red-950" />
                        }
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="skills">Skills</label>
                <div className="flex">
                  <textarea
                    name="skills"
                    id="skills"
                    cols=""
                    rows="2"
                    className="h-10 w-full mt-2 px-2 outline-none border border-cyan-500 bg-white rounded-md text-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.skills}
                  />
                  <div className=" -ml-8 mt-4">
                    {errors.skills ? (
                      <div>
                        {
                          <MdOutlineErrorOutline className="text-2xl text-red-950" />
                        }
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <input
                  type="file"
                  name="resume"
                  id="resume "
                  className="mt-6 h-32 px-2 px-auto w-3/4 border-2 border-dashed border-cyan-400 rounded-md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.resume}
                />
              </div>
              <button
                className="mt-8 p-2 px-4 bg-gray-600 text-white mx-72"
                type="submit"
              >
                Submit
              </button>

              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
