import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns:[
            {
                protocol :'https',
                hostname : '*.googleusercontent.com'
            },
        ]
    }
};

export default nextConfig;
