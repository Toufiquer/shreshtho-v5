import Users from '@/app/api/auth/[...nextauth]/google-auth-modal';
import connectDB from '@/lib/mongoose';
// Function to check if the email exists in the database
export async function checkEmail(email: string) {
  await connectDB();
  console.log('inside check mail');
  const authRecord = await Users.findOne({ email });
  console.log('end check mail');
  return authRecord;
}
