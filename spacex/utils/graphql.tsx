import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!){
    validate(email: $email, password: $password) {
      userID
      email
      password
    }
  }
`;

const REGISTER_USER = gql`
  mutation REGISTER_USER($email: String!, $password: String!){
    createUser(createUserData: {email: $email, password: $password}) {
      userID
      email
    }
  }
`;

const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($itemId: ID!) {
    rocket(id: $itemId) {
      description
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      name
      engines {
        type
        version
        number
        layout
      }
      id
    }
  }
`;

const GET_PAST_HISTORIES = gql` {
  launchesPast {
    id
    mission_name
    links {
      article_link
    }
    launch_date_utc
    rocket {
      rocket_name
    }
    id
  }
}
`

const GET_PAST_INFO = gql` 
  query GET_PAST_INFO($rocket: String!, $year: String!) {
    launchesPast(find: {rocket_name: $rocket, launch_year: $year}) {
      mission_name
      links {
        article_link
      }
      launch_date_utc
      rocket {
        rocket_name
      }
      id
    }
  }
`;

const FETCH_ROCKETS = gql` {
  rockets {
    active
    country
    id
    name
  }
}
`

const DELETE_USER = gql`
  mutation DELETE_USER($userID: uuid!){
    delete_users(where: {id: {_eq: $userID}}) {
      returning {
        id
      }
    }
  }
`

const GET_MISSION_INFO = gql` 
  query GET_MISSION_INFO($missionName: String!, $page: Int!) {
    launchesPast(limit: 3, offset: $page, find: {mission_name: $missionName}) {
      mission_name
      links {
        article_link
      }
      launch_date_utc
      rocket {
        rocket_name
      }
      id
      launch_year
    }
  }
`;

const POST_USER = gql` 
  mutation POST_USER($id: uuid!, $name: String!, $rocket: String!, $twitter: String!) {
    insert_users(objects: {name: $name, rocket: $rocket, twitter: $twitter, id: $id}) {
      returning {
        id
        name
        rocket
        timestamp
        twitter
      }
    }
  }
`;

const UPDATE_USER = gql` 
  mutation UPDATE_USER($userID: uuid!, $name: String!, $rocket: String!, $twitter: String!) {
    update_users(where: {id: {_eq: $userID}}, _set: {name: $name, rocket: $rocket, twitter: $twitter}) {
      returning {
        id
        rocket
        name
        twitter
      }
    }
}
`;

const FIND_ALL_POST = gql`
  query {
    posts {
      postID
      title
      description
    }
  }
`;

const DELETE_POST = gql`
  mutation DELETE_POST($postID: String!, $user: String!) {
    deletePost(postID: $postID, userID: $user) {
      postID
    }
  }
`;

const CREATE_POST = gql`
  mutation CREATE_POST($user: String!, $title: String!, $description: String!){
    createPost(createPostData: {userID: $user, title: $title, description: $description}) {
      postID
      userID
      title
      description
    }
  }
`;

export { 
  LOGIN_USER, 
  REGISTER_USER, 
  GET_ROCKET_INFO, 
  GET_PAST_HISTORIES, 
  GET_PAST_INFO,
  FETCH_ROCKETS,
  DELETE_USER,
  GET_MISSION_INFO,
  POST_USER,
  UPDATE_USER,
  FIND_ALL_POST,
  CREATE_POST,
  DELETE_POST,
}