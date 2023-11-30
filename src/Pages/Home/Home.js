import React from 'react'
import CounterSection from '../../Components/Counter'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        // Retrieve form data and perform any necessary processing
        // For now, let's assume you want to redirect to the All Trips page
        navigate('/all-trips');
    };
}