
import utils, { sanitize } from "@strapi/utils";
// TODO
// I tried to change the default registration in Strapi, which requires username, email and password 
// - Users collection (Users & Permissions plugin). Changing the "unique" and "required" attributes to true
// is easy to do in extensions/users-permissions/content-types/user/schema.json. 
// There are no problems with it, but changing the "required" and "unique" attributes to false for username 
// may lead to complications - as these values ​​are used by default in many mutations, etc.
// so I leave plugin.controllers.auth.register here for later
// This file will be useful when using OAuth 2.0. 

// import * as lodash from "lodash";
// import * as yup from 'yup';

// const validateYupSchema = (schema: yup.AnySchema, options: object = {}) => {
//     return async (body: unknown, errorMessage?: string) => {
//       try {
//         await schema.validate(body, options);
//       } catch (error) {
//         throw new Error(errorMessage || error.message);
//       }
//     };
//   };

// const registerSchema = yup.object({
//     email: yup.string().email().required(),
//     password: yup.string().required(),
// });

// const validateRegisterBody = validateYupSchema(registerSchema);


// const { ApplicationError } = utils.errors;


const sanitizeUser = (user, ctx) => {
    const { auth } = ctx.state;
    const userSchema = strapi.getModel('plugin::users-permissions.user');
  
    return sanitize.contentAPI.output(user, userSchema, { auth });
  };




export default (plugin) => {
    // plugin.controllers.auth.register = async (ctx) =>  {

    //     console.log("Context", ctx);
        
    //     const pluginStore = await strapi.store({ type: 'plugin', name: 'users-permissions' });
        
    //     const settings = await pluginStore.get({ key: 'advanced' }) as any;
    
    //     if (!settings.allow_register) {
    //       throw new ApplicationError('Register action is currently disabled');
    //     }
    
    //     const params = {
    //         ...lodash.omit(ctx.request.body, [
    //           "confirmed",
    //           "blocked",
    //           "confirmationToken",
    //           "resetPasswordToken",
    //           "provider",
    //         ]),
    //         provider: "local",
    //       };
    
    //     await validateRegisterBody(params);
    
    //     const role = await strapi
    //       .query('plugin::users-permissions.role')
    //       .findOne({ where: { type: settings.default_role } });
    
    //     if (!role) {
    //       throw new ApplicationError('Impossible to find the default role');
    //     }
    //     // @ts-ignore
    //     const { email, provider } = params;
    
    //     const identifierFilter = {
    //       $or: [
    //         { email: email.toLowerCase() },
    //       ],
    //     };
    
    //     const conflictingUserCount = await strapi.query('plugin::users-permissions.user').count({
    //       where: { ...identifierFilter, provider },
    //     });
    
    //     if (conflictingUserCount > 0) {
    //       throw new ApplicationError('Email are already taken');
    //     }
    
    //     if (settings.unique_email) {
    //       const conflictingUserCount = await strapi.query('plugin::users-permissions.user').count({
    //         where: { ...identifierFilter },
    //       });
    
    //       if (conflictingUserCount > 0) {
    //         throw new ApplicationError('Email are already taken');
    //       }
    //     }
    
    //     const newUser = {
    //       ...params,
    //       role: role.id,
    //       email: email.toLowerCase(),
    //       confirmed: !settings.email_confirmation,
    //     };
    //     console.log("Settings", settings);
        
    //     const usersPermissionsService = strapi.plugin('users-permissions').service('user');
    //     const jwtPermissionsService = strapi.plugin('users-permissions').service('jwt');

    //     const user = await usersPermissionsService.add(newUser);
    
    //     const sanitizedUser = await sanitizeUser(user, ctx);
    
    //     if (settings.email_confirmation) {
    //       try {
    //         await usersPermissionsService.sendConfirmationEmail(sanitizedUser);
    //       } catch (err) {
    //         throw new ApplicationError(err.message);
    //       }
    
    //       return ctx.send({ user: sanitizedUser });
    //     }
    
    //     const jwt = jwtPermissionsService.issue(lodash.pick(user, ['id']));
    
    //     return ctx.send({
    //       jwt,
    //       user: sanitizedUser,
    //     });
    //   },

    // plugin.controllers.auth.register
    return plugin
}