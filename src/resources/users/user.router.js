const router = require('express').Router();
// const { query } = require('express');
const User = require('./user.model');
const usersService = require('./user.service');

    

router.route('/').get(async ( req, res ) => {
  const users = await usersService.getAll();
  res.json(users.map( User.toResponse ));
});

router.route( '/' ).post( async ( req, res ) => {
  const createUser = new User( req.body );
    const usersPost = await usersService.postUser( createUser );
    res.status(201).json( User.toResponse( usersPost ));
    
});

router.route( '/:id' ).get( async ( req, res ) => {
    const idNumber = req.params.id;
    const usersID = await usersService.getID( idNumber );
    res.json( User.toResponse( usersID ));
});


router.route( '/:id' ).put( async (req, res) => {
  const idNumberPut = req.params.id;
    const createUserPut = new User( req.body );
    const usersPut = await usersService.putUser( idNumberPut, createUserPut );
      res.json( User.toResponse( usersPut ));
});

router.route( '/:id' ).delete( async ( req, res ) => {
  const idNumberDelete = req.params.id;
      const usersDelete = await usersService.deleteUser( idNumberDelete );
      res.status(200).json( User.toResponse( usersDelete ));
});

module.exports = router;

