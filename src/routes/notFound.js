import { useNavigate, useRouteError } from "react-router-dom";
import { Heading, Heading1, Heading4, FlexColumn, SecondaryButton } from "../components/styled/styled";

export default function NotFoundPage() {
  const error = useRouteError();
  const navigate = useNavigate()
  console.error(error);

  return (
    <FlexColumn style={{ height: '100vh'}}>
      <Heading style={{ fontSize: '12vw' }}>404</Heading>
      <Heading1 style={{ margin: '2vw 0 1vw'}}>Oops!</Heading1>
      <Heading4>The page you are looking for doesn't exist or you don't have access to it.</Heading4>
      <SecondaryButton style={{ marginTop: '3vw'}} onClick={() => navigate('/dashboard')}>Go to Home Page</SecondaryButton>
    </FlexColumn>
  );
}