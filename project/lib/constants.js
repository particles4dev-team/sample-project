/**
 * Define constants
 */
SC = {

    /**
     * AVATAR DEFAULT BASE64
     */
    AVATAR: "/images/avatar.jpg",

    /**
     * USER ROLES
     */
    ADMIN       : 'admin',
    MODERATOR   : 'moderator',
    USER        : 'user',
};

// USERS
USERS = {
    ROLES: [SC.ADMIN, SC.MODERATOR, SC.USER]
};

/**
 * System infomation
 */
SC.DEVELOPMENT = 'development';
SC.PRODUCTION  = 'production';
SC.TESTING     = 'testing';
SYSTEMS_INFO = {
    VERSION: '0.0.0',
    ENVIRONMENT: SC.PRODUCTION
};
