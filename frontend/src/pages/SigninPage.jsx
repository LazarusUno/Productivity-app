import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import "../index.css"
export default function SigninPage() {
  const navigate = useNavigate();

  return (
    <div className="signin-container">

    <SignIn 
      path="/login"
      routing="path"
      afterSignInUrl="/dashboard" // Redirect to dashboard after sign-in
    />
    
    </div>
  );
}
