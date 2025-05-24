import connectDB from '@/lib/mongoose';
import { formatResponse, IResponse } from '@/app/api/utils/jwt-verify';
import { createJwt } from '@/app/api/utils/jwt-utils';
import { handleRateLimit } from '@/app/api/utils/rate-limit';
import { checkEmail } from '@/app/api/auth/utils';
import { IUsers } from '../[...nextauth]/google-auth-modal';

const checkCredential = (reqData: IUsers, dbData: IUsers) =>
  reqData.email === dbData.email && reqData.accessToken1 === dbData.accessToken1 && reqData.fixedKey && dbData.fixedKey && reqData.name === dbData.name;

export async function PUT(req: Request) {
  const rateLimitResponse = handleRateLimit(req);
  if (rateLimitResponse) return rateLimitResponse;
  try {
    await connectDB();
    console.log('inside try ');
    const result = await req.json();
    let token;
    if (result.authType === 'google') {
      const isEmailValid = await checkEmail(result.email);
      console.log('isEmailValid', isEmailValid);
      if (isEmailValid && checkCredential(result, isEmailValid)) {
        console.log('inside if');
        token = createJwt(result.email);
        console.log('token', token);
        return formatResponse(token, result.message || 'success', result.status || 210);
      } else {
        return formatResponse('', 'Data not valid', result.status || 503);
      }
    }
  } catch (err) {
    console.log('err', err);
    const result: IResponse = { data: [], message: 'some thing wrong', status: 502 };
    return formatResponse(result.data, result.message, result.status);
  }
}
