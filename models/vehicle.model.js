import { model, Schema } from "mongoose";


const vehicleSchema = new Schema({

    name: {
        type: String,
        maxLength: [60, 'name should be in 60 latter'],
        required: [true, 'name is reqired!'],
        trim: true
    },

    modelNumber: {
        type: String,
        maxLength: 30,
        required: true,
        default: null,
        trim: true,
        unique: true
    },

    image: {
        url: {
            type: String,
            default: 'https://res.cloudinary.com/dab0ekhmy/image/upload/v1728130610/thik-ai/gvjpvq3xljmnw2vwdkag.avif'
        },
        public_id: {
            type: String,
            default: null
        }
    },
    brand: {
        type: String,
        maxLength: [60, 'name should be in 60 latter'],
        trim: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    area: [{

        type: String

    }],
    rate: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

export const Vehicles = model('vehicle', vehicleSchema)