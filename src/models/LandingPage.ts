// import { Schema, model } from 'mongoose';

// interface ILandingPage {
//   landingPageId: string;
//   applicationName: string;
//   date: Date;
//   status: string;
// }

// const LandingPageSchema = new Schema<ILandingPage>({
//   landingPageId: { type: String, required: true, unique: true },
//   applicationName: { type: String, required: true },
//   date: { type: Date, required: true },
//   status: { type: String, required: true, enum: ['Active', 'Inactive'] },
// });

// const LandingPage = model<ILandingPage>('LandingPage', LandingPageSchema);

// export default LandingPage;
import { Schema, model } from 'mongoose';

const landingPageSchema = new Schema({
  landingPageId: { type: String, required: true },
  applicationName: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], required: true },
});

const LandingPage = model('LandingPage', landingPageSchema);
export default LandingPage;
