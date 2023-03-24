import React, { useState, useEffect } from 'react'
import showService from '../services/showService'
import Card from '../components/Card';
import { Link } from 'react-router-dom'

export default function Home() {
  const [shows, setShows] = useState([]);

  const getShows = async () => {
  try {
      const response = await showService.getShows();
      setShows(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect (() => {
    getShows();
  }, [])

  return (
    <div>
      <h2>Home</h2>
      {shows.map((elem) => {
        return (
          <div key={elem._id}>
            <Card show={elem} />
          </div>
        )
      })}
    </div>
  )
}
