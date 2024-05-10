import Content from '@/layouts/Content';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate('/');
    };

    const goToLoginPage = () => {
        navigate('/login');
    };

    return (
        <StHeaderWrapper>
            <Content>
                <StContentWrapper>
                    <div onClick={goToMainPage}>LOGO</div>
                    <div>
                        <input type="text"></input>
                    </div>
                    <div>
                        <span onClick={goToLoginPage}>로그인</span>
                        <span>blo</span>
                        <span>ins</span>
                    </div>
                </StContentWrapper>
            </Content>
        </StHeaderWrapper>
    );
};

const StHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 96px;
    background-color: #fff;
    z-index: 50;
`;

const StContentWrapper = styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
        text-align: center;
        vertical-align: middle;
        width: 100px;
        font-size: 48px;
        line-height: 1;
        cursor: pointer;
        color: black;
    }

    & > div:nth-child(2) {
        width: 700px;

        input {
            width: 100%;
            height: 40px;
            border-radius: 10px;
        }
    }

    & > div:nth-child(3) {
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: yellow;

        /* ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;

            li {
                list-style: none;
                cursor: pointer;
            }
        }

        div {
            width: 40%;
            background-color: yellow;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        } */
    }
`;

export default Header;
