insertInitData = function () {
  if (Meteor.users.find().count() === 0) {

    // insert all the roles
    Roles.createRole('super-admin');
    Roles.createRole('manage-accounts');
    Roles.createRole('manage-categories');
    Roles.createRole('manage-posts');

    // insert 'admin' user
    const user = {
      username: 'admin',
      password: '74123',
      profile: {
        isAdmin: true,
        name: '운영자'
      }
    };
    user._id = Accounts.createUser(user);
    Roles.addUsersToRoles(user._id, ['super-admin']);

    // insert test user
    const testUser = {
      email: `test@shinejs.io`,
      password: '74123',
      profile: {
        name: `테스트`
      }
    };
    testUser._id = Accounts.createUser(testUser);

    // insert dummy users
    for (let j = 0; j < 100; j++) {
      Accounts.createUser({
        email: `test-${j}@shinejs.io`,
        password: '74123',
        profile: {
          name: `회원-${j}`
        }
      });
    }

    let category = {
      title: `공지사항`,
      seq: 1,
      active: true
    };
    category._id = Category.collection.insert(category);
    for (let i = 0; i < 20; i++) {
      Post.collection.insert({
        category: {
          _id: category._id,
          title: category.title
        },
        title: `공지사항 입니다. #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 공지사항입니다. 반갑습니다.'
        },

        author: {
          _id: testUser._id,
          name: testUser.profile.name
        },
        createdAt: moment().subtract(i, 'days').toDate()
      });
    }

    category = {
      title: `자유게시판`,
      seq: 2,
      active: true
    }
    category._id = Category.collection.insert(category);

    for (let i = 0; i < 20; i++) {
      Post.collection.insert({
        category: {
          _id: category._id,
          title: category.title
        },
        title: `자유게시판 입니다. #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 자유게시판 입니다. 반갑습니다.'
        },

        author: {
          _id: testUser._id,
          name: testUser.profile.name
        },
        createdAt: moment().subtract(i, 'days').toDate()
      });
    }


    category = {
      title: `Q&A`,
      seq: 3,
      active: true
    };
    category._id = Category.collection.insert(category);
    for (let i = 0; i < 20; i++) {
      Post.collection.insert({
        category: {
          _id: category._id,
          title: category.title
        },
        title: `Q&A 입니다. #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 Q&A 입니다. 반갑습니다.'
        },

        author: {
          _id: testUser._id,
          name: testUser.profile.name
        },
        createdAt: moment().subtract(i, 'days').toDate()
      });
    }

    /*
    System.collection.insert({
      _id: 'cloudinary',

      cloudName: 'meteor-shine',
      apiKey: '993774671589961',
      presets: {
        accounts: 'ps_accounts',
        posts: 'ps_posts'
      },

      private: {
        apiSecret: '0000'
      }
    });
    */
  }
};
