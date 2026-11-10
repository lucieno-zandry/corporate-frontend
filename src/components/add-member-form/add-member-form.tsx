import { SubmitEventHandler } from "react";

interface AddMemberFormProps {
    onSubmit: SubmitEventHandler<HTMLFormElement>,
    isPending: boolean
}

export const AddMemberForm = ({ onSubmit, isPending }: AddMemberFormProps) => {
    return (
        <form method="post" onSubmit={onSubmit}>
            <div>
                <label htmlFor="member_name">Member name</label>
                <input type="text" name="name" id="member_name" required/>
            </div>

            <div>
                <label htmlFor="member_role">Member role</label>
                <input type="text" name="role" id="member_role" required/>
            </div>

            <button type="submit" disabled={isPending}>{isPending ? 'Adding . . .' : 'Add member'}</button>
        </form>
    );
}