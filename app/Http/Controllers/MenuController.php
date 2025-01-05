<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        // Get the filter type from the request, default to 'all'
        $filter = $request->input('filter', 'all');

        // Initialize the query
        $query = Menu::query();

        // Retrieve menu items based on the filter
        if ($filter !== 'all') {
            // Find the category ID based on the filter name
            $category = Category::where('name', ucfirst($filter))->first();

            if ($category) {
                $query->where('category_id', $category->id);
            }
        }

        // Execute the query to get the filtered menu items
        $menu = $query->get();

        // Return the view with the menu data and authentication status
        return Inertia::render('Menu/Index', [
            'menu' => $menu,
            'isAuthenticated' => Auth::check(),
        ]);
    }
}
