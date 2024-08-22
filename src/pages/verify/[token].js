import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Verify = () => {
    const router = useRouter();
    const { token, email } = router.query;
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        

        if (token) {
            
            fetch(`/api/emailverify?token=${token}`)
                .then((res) => res.json())
                .then((data) => {
                    
                    if (data.success) {
                        setStatus("HELLO : ",data.message);
                        
                    } else {
                        setStatus(data.message || 'Email verification failed.');
                    }
                })
                .catch((err) => {
                    console.error('Verification error:', err.message);
                    setStatus('An error occurred during verification.');
                });
        }
    }, [token]);
    
    return <div><h1>Status :</h1> {status}</div>;
};

export default Verify;
