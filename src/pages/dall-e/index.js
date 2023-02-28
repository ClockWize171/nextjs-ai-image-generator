import React, { useState, useEffect } from 'react'
import { Box, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head';
import RequestPrompt from './RequestPrompt';
import Result from './Result';
import Loader from '@/components/Loader/Loader';
import styles from './DallE.module.css'

const DallE = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [resolution, setResolution] = useState('256x256');
  const [attempt, setAttempt] = useState(0);
  const [disable, setDisable] = useState(false);
  const [waitTime, setWaitTime] = useState(null);

  useEffect(() => {
    const localDataAttempt = window.localStorage.getItem('attempt');
    const localDataDisable = window.localStorage.getItem('disable');
    const localDataTime = window.localStorage.getItem('wait_time');
    setAttempt(JSON.parse(localDataAttempt))
    setDisable(JSON.parse(localDataDisable))
    setWaitTime(JSON.parse(localDataTime))
  }, [])


  // COUNTDOWN CONTROL
  useEffect(() => {
    if (waitTime === 0) {
      // console.log("TIME LEFT IS 0");
      setDisable(false)
      setWaitTime(null)
    }

    // exit early when we reach 0
    if (!waitTime) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setWaitTime(waitTime - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [waitTime])


  useEffect(() => {
    // HANDLE ATTEMPT
    const handleAttempt = () => {
      if (attempt === 5) {
        // WaitTime Control Here!
        setWaitTime(30)
        setDisable(true)
        setAttempt(0)
      }
    }

    window.localStorage.setItem('attempt', JSON.stringify(attempt));
    window.localStorage.setItem('disable', JSON.stringify(disable));
    window.localStorage.setItem('wait_time', JSON.stringify(waitTime));
    handleAttempt();
  }, [attempt, disable, waitTime]);

  const increaseAttempt = () => {
    return setAttempt(attempt + 1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userPrompt === '') {
      setError('Your idea is empty!')
    } else {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(`/api/dall-e?prompt=${userPrompt}&resolution=${resolution}`);
        const url = await response.json();
        increaseAttempt()
        setImage(url.data[0].url)
        setLoading(false)
      } catch (error) {
        setError('Oops! Something went wrong.');
        setLoading(false);
      }
    }
  }

  const [isLargerThan700] = useMediaQuery('(min-height: 700px)')

  return (
    <Box
      h={isLargerThan700 ? '100vh' : 'full'}
      bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.10 130%)',
        'linear(to-tl, myPurple.40 30%, myPurple.30)'
      )}

    >
      <Head>
        <title>Dall-E</title>
        <meta name="description" content="Generate photo of your imagination here." />
        <meta property="og:title" content="DALL-E - What's on your mind?" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      {loading ?
        <Loader />
        :
        <>
          {image === '' ?
            <RequestPrompt
              setUserPrompt={setUserPrompt}
              setResolution={setResolution}
              resolution={resolution}
              handleSubmit={handleSubmit}
              waitTime={waitTime}
              error={error}
              disable={disable}
              attempt={attempt} />
            :
            <div className={styles.containerTest}>
              <Result image={image} setImage={setImage} />
            </div>
          }
        </>
      }

    </Box>
  )
}

export default DallE