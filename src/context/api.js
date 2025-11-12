import Notifications from "../components/Notifications/Notifications.jsx";

const createApi = ()=> (
  {
    getReels: async () => {
      const res = await fetch('https://coverr.co/api/videos?page=0&page_size=20');
      const data = await res.json();
      return data.hits || [];
    },
    getAvatars: async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=6&limit=20');
      const data = await res.json();
      return data.map(img => img.download_url);
    },
    getSearchUsers: async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=6&limit=15');
      return res.json();
    },
    getExplorePersonalized: async () => {
      const key = import.meta.env.VITE_UNSPLASH_KEY;
      const res = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${key}`);
      return res.json();
    },
    getExploreNotPersonalized: async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=30');
      return res.json();
    },

    getPostBlock: async () => {
      const resUsers = await fetch('https://picsum.photos/v2/list?page=4&limit=20');
      const resPosts = await fetch('https://picsum.photos/v2/list?page=1')
      const resLikes = await fetch('https://picsum.photos/v2/list?page=4&limit=20');
      const resComments = await fetch('/api/random?min=1&max=200&count=20');
      const resDesc = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=20')

      const users = await resUsers.json()
      const posts = await resPosts.json()
      const likes = await resLikes.json()
      const comments = await resComments.json()
      const desc = await resDesc.json()

      return {
        users: users,
        likes: likes,
        posts: posts,
        comments: comments,
        desc: desc,
      }
    },

    getMessages: async () => {
      const resUsersPhoto = await fetch('https://picsum.photos/v2/list?page=4&limit=20')
      const resUsersName = await fetch('https://picsum.photos/v2/list?page=5&limit=20')

      const usersPhotos = await resUsersPhoto.json()
      const usersName = await resUsersName.json()

      return {
        usersPhotos: usersPhotos,
        usersName: usersName,
      }
    },

    getNotifications: async () => {
      // const resUsersNickName = await fetch('https://randomuser.me/api/?results=15')
      // const resUsersAvatar = await fetch('https://randomuser.me/api/?results=15')
      //
      // const usersNickName = await resUsersNickName.json()
      // const usersAvatar = await resUsersAvatar.json()
      //
      // return {
      // usersNickName: usersNickName,
      // usersAvatar: usersAvatar,
      // }
      const res = await fetch('https://randomuser.me/api/?results=15')
      const data = await res.json()

      const notifications = data.results.map(el => ({
        usernickname: el.login.username,
        avatar: el.picture.medium,
      }))
      return notifications;
    }

  }
)
export default createApi