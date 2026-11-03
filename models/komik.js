module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        author: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'komik',
        freezeTableName: true,
        timestamps: false
    });

    return Komik;
};
