"use-client";

import { useState } from 'react';

export type formData = {
    name: string;
    email: string;
    message: string
}

export default function Contact() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Get in touch via the below form</h1>
            
        </div>

    );
}