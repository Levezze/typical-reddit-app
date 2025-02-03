import React, { useCallback } from "react";
import { DropdownMenu } from "radix-ui";
import {
	DotFilledIcon,
	CheckIcon,
	StretchHorizontallyIcon,
	SpaceBetweenHorizontallyIcon,
	ImageIcon,
} from "@radix-ui/react-icons";
import "../../../../../styles/OptionsMenu.scss"
import { 
	changeFeedSort, 
	changeFeedColumns, 
	changeDisplayMedia, 
	sortValue,
	feedColumns,
	feedMedia,
} from '../../../../store/slices/feedSlice';
import OptionsIcon from "../../../../components/icons/OptionsIcon";
import { useDispatch, useSelector } from 'react-redux'

const ControlsDropdown: React.FC = () => {
	const isSingleColumn = useSelector(feedColumns) === 1;
	const showMedia = useSelector(feedMedia);
	const sort = useSelector(sortValue);
	
	const dispatch = useDispatch();

	const handleSelectSort = useCallback((value: string) => {
		dispatch(changeFeedSort(value))
	},[dispatch]);

	const handleChangeColumn = useCallback((value: boolean) => {
    dispatch(changeFeedColumns(value));
  },[dispatch]);

	const handleShowMedia = useCallback((value: boolean) => {
    dispatch(changeDisplayMedia(value))
  },[dispatch]);

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className='feed-refresh' aria-label="Customise options">
					<h3>CUSTOMIZE</h3>
					<div className="feed-icon">
						<OptionsIcon />
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
						value={sort} 
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

					{/* Display Columns */}

					<DropdownMenu.Label className="DropdownMenuLabel">
						Display
					</DropdownMenu.Label>
					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={isSingleColumn}
						onCheckedChange={handleChangeColumn}
					>
						<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Single Column 
						<div className="RightSlot">{isSingleColumn ? <StretchHorizontallyIcon/> : <SpaceBetweenHorizontallyIcon/>}</div>
					</DropdownMenu.CheckboxItem>

					{/* Display Media */}

					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={showMedia}
						onCheckedChange={handleShowMedia}
					>
						<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Display Media 
						<div className="RightSlot">{<ImageIcon/>}</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.Arrow className="DropdownMenuArrow" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default ControlsDropdown;
