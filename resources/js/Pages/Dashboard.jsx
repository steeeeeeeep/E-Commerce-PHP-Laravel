import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />
                <div className="top p-6 text-gray-900">
                    <div className="image">
                        <img className='dashboard-images' src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?t=st=1713951090~exp=1713954690~hmac=ffef8b84df4f4a6fa12c278ae6f19feab299d692a34f3e88ecdc841f4b07ec9b&w=1060" alt='dashboard image'/>
                    </div>
                    
                    <div class="categories p-6 grid grid-cols-6 gap-4">
                        <div class="bg-gray-200 p-4">Column 1</div>
                        <div class="bg-gray-300 p-4">Column 2</div>
                        <div class="bg-gray-400 p-4">Column 3</div>
                        <div class="bg-gray-500 p-4">Column 4</div>
                        <div class="bg-gray-600 p-4">Column 5</div>
                        <div class="bg-gray-700 p-4">Column 6</div>
                        
                        <div class="bg-gray-800 p-4">Column 7</div>
                        <div class="bg-gray-900 p-4">Column 8</div>
                        <div class="bg-gray-1000 p-4">Column 9</div>
                        <div class="bg-gray-800 p-4">Column 10</div>
                        <div class="bg-gray-900 p-4">Column 11</div>
                        <div class="bg-gray-1000 p-4">Column 12</div>
                    </div>
                    
                    <div class="p-6 grid grid-cols-1 gap-4">
                        <div class="py-6">
                            <div class="content-title">
                                <div class="text-black-80 py-2">
                                    <h1 class="uppercase bold text-center">Premium bags</h1>
                                </div>
                            </div>
                            <div class="collections">
                                <div class="grid grid-cols-6 gap-4">
                                    <div class="bg-gray-200 p-2">Column 1</div>
                                    <div class="bg-gray-300 p-2">Column 2</div>
                                    <div class="bg-gray-400 p-2">Column 3</div>
                                    <div class="bg-gray-500 p-2">Column 2</div>
                                    <div class="bg-gray-600 p-2">Column 5</div>
                                    <div class="bg-gray-700 p-2">Column 6</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="py-6">
                            <div class="content-title">
                                <div class="text-black-80 py-2">
                                    <h1 class="uppercase bold text-center">Women's Wear</h1>
                                </div>
                            </div>
                            <div class="collections">
                                <div class="grid grid-cols-6 gap-4">
                                    <div class="bg-gray-200 p-2">Column 1</div>
                                    <div class="bg-gray-300 p-2">Column 2</div>
                                    <div class="bg-gray-400 p-2">Column 3</div>
                                    <div class="bg-gray-500 p-2">Column 2</div>
                                    <div class="bg-gray-600 p-2">Column 5</div>
                                    <div class="bg-gray-700 p-2">Column 6</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="py-6">
                            <div class="content-title">
                                <div class="text-black-80 py-2">
                                    <h1 class="uppercase bold text-center">Men's wear</h1>
                                </div>
                            </div>
                            <div class="collections">
                                <div class="grid grid-cols-6 gap-4">
                                    <div class="bg-gray-200 p-2">Column 1</div>
                                    <div class="bg-gray-300 p-2">Column 2</div>
                                    <div class="bg-gray-400 p-2">Column 3</div>
                                    <div class="bg-gray-500 p-2">Column 2</div>
                                    <div class="bg-gray-600 p-2">Column 5</div>
                                    <div class="bg-gray-700 p-2">Column 6</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="py-6">
                            <div class="content-title">
                                <div class="text-black-80 py-2">
                                    <h1 class="uppercase bold text-center">Kid's wear</h1>
                                </div>
                            </div>
                            <div class="collections">
                                <div class="grid grid-cols-6 gap-4">
                                    <div class="bg-gray-200 p-2">Column 1</div>
                                    <div class="bg-gray-300 p-2">Column 2</div>
                                    <div class="bg-gray-400 p-2">Column 3</div>
                                    <div class="bg-gray-500 p-2">Column 2</div>
                                    <div class="bg-gray-600 p-2">Column 5</div>
                                    <div class="bg-gray-700 p-2">Column 6</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 grid grid-cols-1 gap-4">
                        <div class="py-6">
                            <div class="collections">
                                <div class="grid grid-cols-6 gap-4">
                                    <div class="bg-gray-200 p-2">Column 1</div>
                                    <div class="bg-gray-300 p-2">Column 2</div>
                                    <div class="bg-gray-400 p-2">Column 3</div>
                                    <div class="bg-gray-500 p-2">Column 2</div>
                                    <div class="bg-gray-600 p-2">Column 5</div>
                                    <div class="bg-gray-700 p-2">Column 6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
