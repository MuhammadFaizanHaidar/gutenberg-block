const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		content: { 
			type:'array',
			source: 'children',
			selector: 'p',
		}
	},
	edit: ( props ) => {
		//console.log( 'edit-props', props );
		const { attributes, setAttributes } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				tagName="p"
				onChange={ onChangeContent }
				value={ attributes.content }
			/>
		)
	},
	save: ( props ) => {
		//console.log( 'saved-props', props.attributes.content );
		
		return ( 
			<RichText.Content 
				tagName="p" 
				value={ props.attributes.content } 
			/> 
		)
	}
} );
