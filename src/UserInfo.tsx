import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";

/**
 *
 * @TODO
 * Needs error messaging for incomplete fields
 */

export default function UserInfo({
  updateActiveStep,
}: {
  updateActiveStep: Function;
}) {
  return (
    <div className="UserInfo grid">
      <StepHeader
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="e.g. email@website.com"
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phone"
          placeholder="e.g. +1 234 567 8910"
          required
        />
      </form>
      <NavButtons
        hideButton={true}
        nextClick={() => {
          updateActiveStep(2);
        }}
      />
    </div>
  );
}
