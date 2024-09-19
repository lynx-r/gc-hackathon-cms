"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'redbookdb'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'redbookdb'),
            user: env('DATABASE_USERNAME', 'admin'),
            password: env('DATABASE_PASSWORD', 'admin'),
            ssl: env.bool('DATABASE_SSL', false)
        }
    }
});
