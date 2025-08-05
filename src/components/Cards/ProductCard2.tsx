"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { BsCartPlus } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

interface ProductCard2Props {
	id: string | number;
	image: string;
	oldAmount?: string;
	newAmount: string;
	description: string;
	category?: string;
	className?: string;
	showWishlist?: boolean;
}

const ProductCard2 = ({
	id,
	image,
	oldAmount,
	newAmount,
	description,
	category,
	className = "",
	showWishlist = true,
}: ProductCard2Props) => {
	const router = useRouter();
	const { addItem, removeItem, updateItem, getItem } = useCart();
	const [isHovered, setIsHovered] = useState(false);
	const ID = id.toString();
	const cartItem = getItem(ID);
	const cartItemCount = cartItem?.quantity || 0;
	const NewAmount = parseInt(newAmount);
	const OldAmount = oldAmount ? parseInt(oldAmount) : null;
	const slugDesc = convertToSlug(description);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.stopPropagation();
		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: 1,
			image: image,
		});
	};

	const updateQuantity = (newQuantity: number) => {
		if (newQuantity <= 0) {
			removeItem(ID);
		} else {
			updateItem(ID, { quantity: newQuantity });
		}
	};

	return (
		<div
			className={`group relative flex flex-col bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md ${className}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onTouchStart={() => setIsHovered(true)}
		>
			{/* Software Image Container */}
			<div className='relative aspect-square w-full bg-gray-50'>
				<Link href={`/product/${slugDesc}-${id}`} className='block h-full'>
					<div className='relative h-full overflow-hidden flex items-center justify-center p-6'>
						<Picture
							src={image}
							alt={description}
							className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
							loading='eager'
						/>
						{/* Gradient overlay */}
						<div className='absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300' />
					</div>
				</Link>

				{/* Sale Badge - Reused for "Digital Download" */}
				<div className='absolute top-3 left-3 bg-blue-600 text-white text-[10px] xs:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm'>
					Digital
				</div>

				{/* Discount Badge */}
				{OldAmount && OldAmount > NewAmount && (
					<div className='absolute top-3 right-3 bg-red-600 text-white text-[10px] xs:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm'>
						{Math.round(((OldAmount - NewAmount) / OldAmount) * 100)}% OFF
					</div>
				)}
			</div>

			{/* Software Info */}
			<div className='p-3 sm:p-4 pt-2 sm:pt-3 space-y-1 sm:space-y-2'>
				{/* Category tag - Can represent software type */}
				<span className='text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider'>
					{category}
				</span>

				<Link href={`/product/${slugDesc}-${id}`}>
					<h3 className='text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 hover:text-primaryColor-200 transition-colors leading-tight'>
						{description}
					</h3>
				</Link>

				{/* Price */}
				<div className='flex items-baseline gap-1 sm:gap-2 mt-0 sm:mt-1'>
					<span className='text-base sm:text-lg font-bold text-gray-900'>
						<FormatMoney2 value={NewAmount} />
					</span>
					{OldAmount && OldAmount > NewAmount && (
						<span className='text-xs sm:text-sm text-gray-500 line-through'>
							<FormatMoney2 value={OldAmount} />
						</span>
					)}
				</div>

				{/* Add to Cart - Modified for software */}
				<div
					className={`mt-2 sm:mt-3 transition-all duration-300 ${
						isHovered || window.innerWidth < 640
							? "translate-y-0 opacity-100"
							: "translate-y-2 opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
					}`}
				>
					{cartItemCount > 0 ? (
						<div className='flex items-center justify-between bg-gray-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-primaryColor-200'>
							<button
								onClick={(e) => {
									e.stopPropagation();
									updateQuantity(cartItemCount - 1);
								}}
								className='text-gray-600 hover:text-primaryColor-200 transition-colors p-1'
								aria-label='Decrease quantity'
							>
								<AiOutlineMinus size={12} className='sm:w-3.5 sm:h-3.5' />
							</button>
							<span className='text-xs sm:text-sm font-medium'>
								{cartItemCount} License{cartItemCount > 1 ? "s" : ""}
							</span>
							<button
								onClick={(e) => {
									e.stopPropagation();
									updateQuantity(cartItemCount + 1);
								}}
								className='text-gray-600 hover:text-primaryColor-200 transition-colors p-1'
								aria-label='Increase quantity'
							>
								<AiOutlinePlus size={12} className='sm:w-3.5 sm:h-3.5' />
							</button>
						</div>
					) : (
						<button
							onClick={handleAddToCart}
							className='w-full flex items-center justify-center gap-1 sm:gap-2 bg-primaryColor-200 hover:bg-primaryColor-300 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm sm:shadow-md hover:shadow-lg'
						>
							<BsCartPlus size={14} className='sm:w-4 sm:h-4' />
							<span>Get License</span>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard2;
