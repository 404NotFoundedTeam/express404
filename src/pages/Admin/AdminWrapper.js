import styled from 'styled-components';

const AdminWrapper = styled.section`
  min-height: 100vh;
  aside {
    min-width: 350px;
    background: #FFFCED;
    padding: 20px 10px;
    img {
      width: 90%;
      display: block;
      margin: 0 auto;
    }
    ul {
      margin-top: 40px;
      li {
        margin-bottom: 10px;
      }
    }

    .admin-link {
      display: flex;
      align-items: center;
      gap: 20px;
      color: black;
      text-decoration: none;
      border-radius: 10px;
      padding: 15px;
      transition: 0.3s;
      &:hover {
        background-color: #FFDC03A6;
      }
    }

    .active {
      background-color: #FFDC03A6;
    }

    .admin-list-icon {
      font-size: 28px;
      color: gray;
    }

    .admin-list-title {
      font-size: 18px;
      font-weight: 300;
    }
    .admin-list-subtitle {
      color: gray;
      font-size: 11px;
    }
  }
  main {
    width: 100%;
    header {
      padding: 20px;
    }
  }
  .header-icons:hover {
    cursor: pointer;
    color: black;
  }
  .admin-main-content {
    padding: 20px;
  }
`

export default AdminWrapper;