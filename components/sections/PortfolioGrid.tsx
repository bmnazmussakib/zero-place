import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import PortfolioCard from "../cards/PortfolioCard";

interface PortfolioItem {
    title: string;
    category: string;
    image: string;
}

interface PortfolioGridProps {
    categories: string[];
    items: PortfolioItem[];
}

export default function PortfolioGrid({ categories, items }: PortfolioGridProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? items
        : items.filter(item => item.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 120
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2 }
        }
    } as const;

    return (
        <>
            {/* Categories Tabs */}
            <div className="flex flex-col items-center mb-6 md:mb-10 lg:mb-20">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "relative px-3 py-2 lg:px-6 lg:py-3 rounded-full font-bold text-xs lg:text-sm uppercase tracking-tighter transition-colors duration-300",
                                    isActive
                                        ? "text-white"
                                        : "text-primary hover:bg-gray-100 border border-primary/20"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="category-highlight"
                                        className="absolute inset-0 bg-primary rounded-full z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid */}
            <AnimatePresence mode="popLayout">
                {filteredItems.length > 0 ? (
                    <motion.div
                        key={activeCategory}
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <PortfolioCard
                                    title={item.title}
                                    category={item.category}
                                    image={item.image}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center py-32 bg-white rounded-[3rem] border-4 border-dashed border-gray-200"
                    >
                        <p className="text-2xl font-heading font-black text-text-muted uppercase tracking-tighter">
                            More items coming soon to {activeCategory}!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
