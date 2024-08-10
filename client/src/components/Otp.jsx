import React, { useRef, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

function Otp() {
    const email = "jsunnybabu@gmail.com";
    let [otp, setOtp] = useState(-1);

    useEffect(() => {
        // Use async function inside useEffect
        const fetchOtp = async () => {
            try {
                let tempUser = await axios.get(`http://localhost:4000/user-api/get-tempuser/${email}`);
                setOtp(tempUser.data.payload.otp);
            } catch (error) {
                console.error("Error fetching OTP:", error);
            }
        };

        fetchOtp();
    }, [email]);

    const { control, handleSubmit, watch, setFocus } = useForm({
        defaultValues: {
            code1: '',
            code2: '',
            code3: '',
            code4: '',
        },
    });

    async function addUser(decodedCode) {
        try {
            if (decodedCode === otp) {
                await axios.post(`http://localhost:4000/user-api/check-otp`, { otp: decodedCode });
                alert("OTP Verified");
            } else {
                alert("Invalid OTP");
            }
        } catch (error) {
            console.error("Error during OTP verification:", error);
        }
    }

    const inputRefs = useRef([]);
    const watchAllFields = watch();

    const onSubmit = (data) => {
        if (Object.values(data).every((val) => val !== '')) {
            let decodedCode = parseInt(data.code1 + data.code2 + data.code3 + data.code4);
            addUser(decodedCode);
        } else {
            alert('Please fill all the input fields.');
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text').slice(0, 4);
        if (/^\d{4}$/.test(text)) {
            text.split('').forEach((digit, index) => {
                setFocus(`code${index + 1}`);
            });
        }
    };

    return (
        <div className="bg-black flex justify-center items-center min-h-screen">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
                    <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your phone number.</p>
                </header>
                <form id="otp-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-center gap-3">
                        {['code1', 'code2', 'code3', 'code4'].map((name, index) => (
                            <Controller
                                key={name}
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        ref={(el) => {
                                            inputRefs.current[index] = el;
                                            field.ref(el);
                                        }}
                                        type="text"
                                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength="1"
                                        onChange={(e) => {
                                            field.onChange(e);
                                            if (e.target.value && index < 3) {
                                                inputRefs.current[index + 1].focus();
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Backspace' && !watchAllFields[name] && index > 0) {
                                                inputRefs.current[index - 1].focus();
                                            }
                                        }}
                                        onPaste={handlePaste}
                                    />
                                )}
                            />
                        ))}
                    </div>
                    <div className="max-w-[260px] mx-auto mt-4">
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                        >
                            Verify Account
                        </button>
                    </div>
                </form>
                <div className="text-sm text-slate-500 mt-4">
                    Didn't receive code? <a href="#0" className="font-medium text-indigo-500 hover:text-indigo-600">Resend</a>
                </div>
            </div>
        </div>
    );
}

export default Otp;
