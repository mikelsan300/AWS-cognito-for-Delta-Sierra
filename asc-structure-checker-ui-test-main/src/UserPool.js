import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_ehZqqBAO1",
    ClientId: "5nde4fqfprekibk44vs5nj7h8e"
}
export default new CognitoUserPool(poolData);