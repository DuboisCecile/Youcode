import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: DefaultSession['user'] & {
            // on étend le user par défaut en lui ajoutant un id
            /** The user's id */
            id?: string;
        };
    }
}
