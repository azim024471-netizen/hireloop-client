import { requireRole } from '@/lib/coreFunction/session';
import React from 'react';

const AdminLayOutPage = async ({children}) => {
    await requireRole('admin')
    return  children;
};

export default AdminLayOutPage;