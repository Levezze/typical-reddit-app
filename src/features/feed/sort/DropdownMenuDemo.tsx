import React, { useState } from "react";
import { DropdownMenu } from "radix-ui";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
import "../../../styles/OptionsMenu.scss"

import { changeFeedSort, sortValue } from '../feedSlice'
import { useDispatch, useSelector } from 'react-redux'


  

import RefreshIcon from "../../../app/components/icons/RefreshIcon";

const DropdownMenuDemo: React.FC = () => {
	const [bookmarksChecked, setBookmarksChecked] = useState(true);
	const [urlsChecked, setUrlsChecked] = useState(false);
	const [person, setPerson] = useState("pedro");



	const dispatch = useDispatch();
  const handleSelectSort = (value: string) => {
    dispatch(changeFeedSort(value))
  };

	const example = (
	<form>
		<label htmlFor='sort-select' />
		<select 
			name='sort-select' 
			id='sort-select' 
			defaultValue={'hot'} 
			value={useSelector(sortValue)}
			onChange={handleSelectSort}
		>
			<option value={'hot'}>Hot</option>
			<option value={'new'}>New</option>
			<option value={'top'}>Top</option>
			<option value={'rising'}>Rising</option>
			<option value={'controversial'}>Controversial</option>
		</select>
	</form>
	)
	example;
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className='feed-refresh' aria-label="Customise options">
					<h3>OPTIONS</h3>
					<div className="feed-icon">
						<HamburgerMenuIcon />
					</div>
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>

					{/* Sort */}
					
					<DropdownMenu.Label className="DropdownMenuLabel">
						Sort
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup 
						value={useSelector(sortValue)} 
						onValueChange={handleSelectSort}>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="hot"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Hot
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="new"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							New
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="top"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Top
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="rising"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Rising
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="controversial"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Controversial
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

					<DropdownMenu.Separator className="DropdownMenuSeparator" />

					{/* Display  */}

					<DropdownMenu.Label className="DropdownMenuLabel">
						Display
					</DropdownMenu.Label>
					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
							<CheckIcon />
							
						</DropdownMenu.ItemIndicator>
						Single Column 
						<div className="RightSlot">⌘+B</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Full URLs
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Arrow className="DropdownMenuArrow" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownMenuDemo;
