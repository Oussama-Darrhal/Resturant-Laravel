import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";
import NavBar from "../Components/NavBar"; // Assuming you're using NavBar in this way
import {
    BookOpen,
    Users,
    MessageCircle,
    Award,
    Clock,
    Target,
} from "lucide-react";

const Stats = () => (
    <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-around text-center gap-6">
            <div className="p-4">
                <div className="text-3xl font-bold">21,000+</div>
                <div className="text-gray-600">Happy Clients!</div>
            </div>
            <div className="p-4">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-gray-600">Wonderfull Dish!</div>
            </div>
            <div className="p-4">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-gray-600">Veteran Chefs</div>
            </div>
        </div>
    </div>
);

export default Stats;
