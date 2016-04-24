/*Anything added should not be visible in your code and not in your repo*/
/*since you might store very sensitve infor such a s private keys*/
/*This is for google analytics pacakge called 'ga'.*/
/*When doing google analytics you will be give a number which you will add below in account*/

Meteor.subscribe('recipes');
console.log(Meteor.settings.public.ga.account);
