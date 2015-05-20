'use strict';

/**
 * @ngdoc service
 * @name userManagementApp.UserService
 * @description
 * # UserService
 * Service in the userManagementApp.
 */
angular.module('userManagementApp')
    .service('UserService', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var users = [{
            'id': 1,
            'name': {
                'title': 'mr',
                'first': 'jimmie',
                'last': 'lane'
            },
            'location': {
                'street': '7644 hickory creek dr',
                'city': 'bowral',
                'state': 'western australia',
                'zip': '35914'
            },
            'email': 'jimmie.lane56@example.com',
            'username': 'heavybird865',
            'registered': '1404155667',
            'phone': '08-6568-9578',
            'cell': '0413-472-215',
            'lang': 'AU'
        }, {
            'id': 2,
            'name': {
                'title': 'mr',
                'first': 'steijn',
                'last': 'bruining'
            },
            'location': {
                'street': '6075 nicolaasweg',
                'city': 'heemskerk',
                'state': 'zeeland',
                'zip': '85690'
            },
            'email': 'steijn.bruining92@example.com',
            'username': 'ticklishmeercat455',
            'registered': '977481984',
            'phone': '(964)-904-8765',
            'cell': '(591)-906-1281',
            'lang': 'NL'
        }, {
            'id': '3',
            'name': {
                'title': 'ms',
                'first': 'tara',
                'last': 'allen'
            },
            'location': {
                'street': '2565 ash dr',
                'city': 'sydney',
                'state': 'south australia',
                'zip': '15909'
            },
            'email': 'tara.allen94@example.com',
            'username': 'yellowsnake548',
            'registered': '1221935951',
            'phone': '01-7949-3678',
            'cell': '0435-088-079',
            'TFN': '766552438',
            'lang': 'AU'
        }, {
            'id': '4',
            'name': {
                'title': 'ms',
                'first': 'angela',
                'last': 'reyes'
            },
            'location': {
                'street': '1308 o\'connell street',
                'county': 'south dublin',
                'state': 'hawaii',
                'zip': '51989'
            },
            'email': 'angela.reyes83@example.com',
            'username': 'purpleswan621',
            'registered': '1346938531',
            'phone': '031-486-2632',
            'cell': '081-730-6297',
            'lang': 'IE'
        }, {
            'id': '5',
            'name': {
                'title': 'mrs',
                'first': 'jen',
                'last': 'simmons'
            },
            'location': {
                'street': '4639 victoria street',
                'city': 'portsmouth',
                'state': 'south glamorgan',
                'postcode': 'N4 7QJ'
            },
            'email': 'jen.simmons27@example.com',
            'username': 'organicrabbit389',
            'registered': '933075395',
            'phone': '016974 97372',
            'cell': '0770-351-190',
            'lang': 'GB'
        }];

        return {
            create: function(userData) {
                userData.id = users.length > 0 ? parseInt(users[users.length - 1].id) + 1 + '' : '1';
                users.push(userData);
                return userData;
            },
            update: function(userData) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === userData.id) {
                        users[i] = userData;
                        return users[i];
                    }
                }
            },
            delete: function(id) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === id) {
                        return users.splice(i, 1);
                    }
                }
            },
            getById: function(id) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === id) {
                        return users[i];
                    }
                }
            },
            getAll: function() {
                return users;
            }
        };
    });
