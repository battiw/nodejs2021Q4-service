const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async ( req, res ) => {
  const users = await usersService.getAllServis();
  res.json(users.map( User.toResponse ));
});

router.route( '/' ).post( async ( req, res ) => {
  const createUser = new User( req.body );
    const usersPost = await usersService.postUserServis( createUser );
    res.status(201).json( User.toResponse( usersPost ));
    
});

router.route( '/:id' ).get( async ( req, res ) => {
    const idNumber = req.params.id;
    const usersid = await usersService.getIDServis( idNumber );
        if (!usersid) {
          res.status(404).json();
        } else {
          res.status(200).json( User.toResponse(usersid));
        };
});


router.route( '/:id' ).put( async (req, res) => {
  const idNumberPut = req.params.id;
    const createUserPut = new User( req.body );
    const usersPut = await usersService.putUserServis( idNumberPut, createUserPut );
      res.status(200).json( User.toResponse( usersPut ));
});

router.route( '/:id' ).delete( async ( req, res ) => {
  const idNumberDelete = req.params.id;
      const usersDelete = await usersService.deleteUserServis( idNumberDelete );
      res.status(200).json( User.toResponse( usersDelete ));

});

module.exports = router;

