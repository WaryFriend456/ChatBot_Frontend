import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(username, password);
      const response = await axios.post('http://localhost:8000/login', { name: username, password });
      alert("Login Successful.");
      localStorage.setItem("UID", response.data.UID);
      navigate('/chatbot'); // Redirect to chatbot route after login
    } catch (error) {
      alert(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <form onSubmit={handleLogin} className="flex flex-col gap-4 p-4">
    //   <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" required />
    //   <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" required />
    //   <Button type="submit" color="blue" disabled={loading} className="mt-4">
    //     {loading ? 'Logging in...' : 'Login'}
    //   </Button>
    // </form>
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96 shadow-lg ">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-24 place-items-center "
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4">
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" required />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" required />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type='submit' disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/register"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Register
              </Typography>
            </Typography>
            <Typography
              as="a"
              href="/forgotpass"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold flex justify-center"
            >
              Forgot Password?
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/registration', { name, email, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <form onSubmit={handleRegister} className="flex flex-col gap-4 p-4">
    //   <Input type="text" value={name} onChange={(e) => setName(e.target.value)} label="Name" required />
    //   <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />
    //   <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" required />
    //   <Button type="submit" color="blue" disabled={loading} className="mt-4">
    //     {loading ? 'Registering...' : 'Register'}
    //   </Button>
    // </form>
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96 shadow-lg ">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-24 place-items-center "
        >
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardBody className="flex flex-col gap-4">
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} label="Name" required />
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" required />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type='submit' disabled={loading} className="mt-4">
              {loading ? 'Registering...' : 'Submit'}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="/login"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign in
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export { Login, Registration };