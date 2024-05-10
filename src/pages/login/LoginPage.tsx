import styled from 'styled-components';

const LoginPage = () => {
    const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const naverLogin = () => {
        // window.location.href = KAKAO_AUTH_URL;
    };

    const googleLogin = () => {
        // window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <StLoginWrapper>
            <StContentWrapper>
                <LoginBox>
                    <label>아이디</label>
                    <input type="text" />
                </LoginBox>
                <LoginBox>
                    <label>비밀번호</label>
                    <input type="text" />
                </LoginBox>
                <SocialLoginBox>
                    <button onClick={kakaoLogin}>kakaoLogin</button>
                    <button onClick={googleLogin}>googleLogin</button>
                    <button onClick={naverLogin}>naverLogin</button>
                </SocialLoginBox>
            </StContentWrapper>
        </StLoginWrapper>
    );
};

const StLoginWrapper = styled.div`
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
`;

const StContentWrapper = styled.div`
    margin-top: 50px;
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: yellow;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    label {
        display: block;
        width: 70px;
    }
`;

const SocialLoginBox = styled.div`
    margin-top: 20px;
    width: 250px;

    display: flex;
    flex-direction: column;

    button {
        height: 30px;
        margin: 5px 0;
    }
`;

export default LoginPage;
