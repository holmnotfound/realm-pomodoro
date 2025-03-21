/* import { activeUser } from "../../main";
 */
import { ActiveCustomer } from "../utils/createUsers.js";

export const storeUsers = {
    localUsers: [],

    addUserToStorage: function(user) {
        if(user) {
            const usersStorage = this.getUsersInfo();
            this.localUsers = usersStorage;
            this.localUsers.push(user);
            this.saveUsers();
        }
    },

    removeUserFromStorage: function(user) {
    let userFound = this.localUsers.find((targetUser) => {
        return user.id === targetUser.id;
    })
    this.localUsers.splice(this.usersStorage.indexOf(userFound), 1);
    this.saveUsers()
    },

    clearUsersStorage: function () {
        this.usersStorage = [];
        this.saveUsers();
    },

    getUsersInfo: function () {
        this.localUsers = JSON.parse(localStorage.getItem('Users')) || [];    
        return this.localUsers;    
    },

    saveUsers: function() {
        localStorage.setItem('Users', JSON.stringify(this.localUsers));
    },

    updateUser: function(user) {
        this.getUsersInfo(); 

        console.log(user);
        this.localUsers = this.localUsers.map(targetUser => 
            targetUser.username === user.username ? user : targetUser
        );
        console.log(this.localUsers);
        this.saveUsers();
    }
}

export const activeUserStorage = {
    localActiveCustomer: null,

    addUserToStorage: function(user) {
        if(user) {
            const activeCustomer = new ActiveCustomer(
                user.username, 
                user.password, 
                user.role, user.email, 
                user.profile_image, 
                user.shoppingCart
            )

            this.localActiveCustomer = activeCustomer;
            this.saveUsers();
        }
    },

    saveUsers: function() {
    
        localStorage.setItem('activeCustomer', JSON.stringify({
            username: this.localActiveCustomer.username,
            password: this.localActiveCustomer.password,
            role: this.localActiveCustomer.role,
            email: this.localActiveCustomer.email,
            profile_image: this.localActiveCustomer.profile_image,
            shoppingCart: this.localActiveCustomer.shoppingCart
        }));
    },

    // getActiveUser: function() {
    //     let activeCustomerLocalStorage = localStorage.getItem("activeCustomer");
    //     activeCustomerLocalStorage = JSON.parse(activeCustomerLocalStorage);

    //         this.localActiveCustomer = new ActiveCustomer(
    //         activeCustomerLocalStorage.username,
    //         activeCustomerLocalStorage.password,
    //         activeCustomerLocalStorage.role,
    //         activeCustomerLocalStorage.email,
    //         activeCustomerLocalStorage.profile_image,
    //         activeCustomerLocalStorage.shoppingCart || []
    //     );

    // return this.localActiveCustomer; 
    // }
    getActiveUser: function() {
        let activeCustomerLocalStorage = localStorage.getItem("activeCustomer");
    
        
        if (!activeCustomerLocalStorage) {
            return null; 
        }
    
        
        activeCustomerLocalStorage = JSON.parse(activeCustomerLocalStorage);
    
       
        if (!activeCustomerLocalStorage.username) {
            return null;
        }
    
        
        this.localActiveCustomer = new ActiveCustomer(
            activeCustomerLocalStorage.username,
            activeCustomerLocalStorage.password,
            activeCustomerLocalStorage.role,
            activeCustomerLocalStorage.email,
            activeCustomerLocalStorage.profile_image,
            activeCustomerLocalStorage.shoppingCart || []
        );
    
        return this.localActiveCustomer;
    }
}