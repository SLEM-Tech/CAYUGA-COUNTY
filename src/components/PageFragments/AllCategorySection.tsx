"use client";
import React, { useEffect, useState } from "react";
import Picture from "../picture/Picture";
import {
	book,
	heroZion1,
	heroZion2,
	heroZion3,
	heroZion4,
	heroZion5,
	heroZion6,
} from "@public/images";

import Link from "next/link";
import { useCategories, useProduct } from "../lib/woocommerce";
import {
	FaBoxOpen,
	FaRegClock,
	FaShieldAlt,
	FaShoppingBag,
	FaTruck,
} from "@node_modules/react-icons/fa";

const AllCategorySection = () => {
	const benefits = [
		{
			icon: <FaBoxOpen className='text-4xl text-primaryColor-400' />,
			title: "Discount",
			subtitle: "Every week new sales",
		},
		{
			icon: <FaTruck className='text-4xl text-primaryColor-400' />,
			title: "Free Delivery",
			subtitle: "100% Free for all orders",
		},
		{
			icon: <FaRegClock className='text-4xl text-primaryColor-400' />,
			title: "Great Support 24/7",
			subtitle: "We care about your experience",
		},
		{
			icon: <FaShieldAlt className='text-4xl text-primaryColor-400' />,
			title: "Secure Payment",
			subtitle: "100% Secure Payment Method",
		},
	];

	const {
		data: productsData,
		isLoading: productWpIsLoading,
		isError: productIsError,
	} = useProduct("");

	const ProductsData: ProductType[] = productsData;

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Get first 3 products with images
	const featuredProducts = ProductsData?.filter(
		(product) => product?.images?.length > 0,
	).slice(0, 3);

	useEffect(() => {
		if (featuredProducts?.length > 1) {
			const interval = setInterval(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % featuredProducts?.length,
				);
			}, 5000); // Change image every 5 seconds

			return () => clearInterval(interval);
		}
	}, [featuredProducts?.length]);

	return (
		<>
			<section className='flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-12 items-center px-3 lg:px-6 gap-6 lg:min-h-[80vh] overflow-hidden bg-gray-400 max-w-[1350px] mx-auto rounded-b-2xl'>
				{/* LEFT TEXT CONTENT */}
				<div className='lg:col-span-6 z-10 text-black space-y-2 lg:space-y-8 h-full text-center lg:text-start flex flex-col justify-center p-5'>
					<span className='text-secondary-400'>Welcome to chairy</span>

					<p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider font-semibold leading-tight md:leading-10 max-w-md'>
						Best Software Applications for your need.
					</p>

					<Link
						href='/category'
						className='bg-primary shadow-md text-sm lg:text-base px-4 lg:px-6 py-3 flex items-center mx-auto lg:mx-0 gap-2 text-white rounded-xl w-fit transition-[.3] hover:scale-105'
					>
						<span className='capitalize'>shop now</span>
						<FaShoppingBag className='text-lg' />
					</Link>
				</div>

				<div className='lg:col-span-6 relative flex items-center justify-center h-full lg:overflow-hidden'>
					{/* Background circle - responsive sizing */}
					<div className='bg-secondary-600 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full absolute -top-12 sm:-top-20 md:-top-28 lg:-top-36 hidden lg:block' />

					{/* Carousel container - responsive sizing */}
					<div className='relative z-10 w-full xs:w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mx-auto'>
						{featuredProducts?.map((product, index) => (
							<div
								key={product?.id}
								className={`
      ${
				typeof window !== "undefined" && window.innerWidth < 1024
					? // Mobile: only show current image (no absolute positioning)
					  index === currentImageIndex
						? "block"
						: "hidden"
					: // Desktop: normal carousel behavior
					  `absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
					  }`
			}
    `}
							>
								<Picture
									src={product?.images[0]?.src}
									alt={product?.name}
									className='w-full h-full object-contain'
									sizes='(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw'
								/>
							</div>
						))}
					</div>

					{/* Mobile navigation dots - only shows on small screens */}
					<div className='lg:hidden flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-20'>
						{featuredProducts?.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`w-2 h-2 rounded-full transition-all ${
									index === currentImageIndex
										? "bg-primary scale-125"
										: "bg-white/50"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</section>
			<div className='flex flex-wrap justify-center gap-10 py-6 bg-white text-gray-800 shadow-2xl w-fit mx-auto rounded-2xl px-5 -mt-10'>
				{benefits.map((benefit, idx) => (
					<div key={idx} className='flex items-center gap-4 max-w-[250px]'>
						<div>{benefit.icon}</div>
						<div>
							<h4 className='font-semibold text-sm'>{benefit.title}</h4>
							<p className='text-xs text-gray-500'>{benefit.subtitle}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default AllCategorySection;
