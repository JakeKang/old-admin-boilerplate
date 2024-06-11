import styled from 'styled-components';
import { Row, Col } from 'antd';

export const AdminFormContainer = styled.div`
  padding: 1px 25px;
  margin: auto;
  background: white;
`;
export const FormHeader = styled.h2`
  font-weight: bold;
  padding-top: 18px;
  padding-bottom: 15px;
  magin: 0 !important;
`;

export const LoginPage = styled(Row)`
.ant-btn-primary {
  background: #034691;
  border-color: #034691;
}
a {
  color: #034691;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #034691;
  border -color: #034691;
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border: 1px solid #034691 !important;
}
.ant-input-affix-wrapper:hover,
.ant-input-affix-wrapper {
  box-shadow: none;
  
}
.ant-input-affix-wrapper:focus, 
.ant-input-affix-wrapper-focused, 
.ant-input-affix-wrapper:hover {
  border-color: #034691;
}
`;
export const ModalBody = styled(Col)`
  padding: 20px;
`;
export const Title = styled.h2`
  text-align: center;

  padding-bottom: 15px;
  border-bottom: 1px solid #d9d9d9;
`;
