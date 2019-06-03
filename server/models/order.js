'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        country: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        cc_name: DataTypes.STRING,
        cc_number: DataTypes.STRING,
        cc_expiration: DataTypes.STRING,
        cc_cvv: DataTypes.STRING
    }, {});
    Order.associate = function(models) {
        // associations can be defined here
    };
    return Order;
};