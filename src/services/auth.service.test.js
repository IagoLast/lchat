import useAuth from './auth.service';
import googleAuth from './google-auth.service';
import React from 'react';




describe('auth.service', () => {

  let username, isSignedIn, signIn, signOut;
  beforeEach(() => {
    const getter = () => jest.fn();
    const setter = jest.fn();

    jest.spyOn(React, 'useState').mockReturnValue([getter, setter]);
    jest.spyOn(React, 'useEffect').mockReturnValue(jest.fn());

    [username, isSignedIn, signIn, signOut] = useAuth();
  })
  describe('.isSignedIn', () => {
    it('should return true when the user is signed in', () => {
      googleAuth.isSignedIn = jest.fn().mockReturnValue(true);
      const actual = isSignedIn();
      expect(actual).toEqual(true);
    });

    it('should return false when the user not signed in', () => {
      jest.spyOn(googleAuth, 'isSignedIn').mockReturnValue(false);
      const actual = isSignedIn();
      expect(actual).toEqual(false);
    });
  });

  describe('.signIn', () => {
    it('should launch the sign in process', () => {
      const signInSpy = jest.spyOn(googleAuth, 'signIn');
      signIn();
      expect(signInSpy).toHaveBeenCalled();
    });
  });
  describe('.signOut', () => {
    it('should launch the sign out process', () => {

    });
  });

});