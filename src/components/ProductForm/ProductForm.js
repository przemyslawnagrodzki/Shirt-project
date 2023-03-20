import styles from './ProductForm.module.scss'
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';


const ProductForm = ({handleSubmit, currentSize, currentColor, sizes, colors, setCurrentSize, setCurrentColor}) => {

    return (
        <form onSubmit={handleSubmit}>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
            <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
            <Button className={styles.button} >
              <span className="fa fa-shopping-cart" />
            </Button>
        </form>

    );
};

ProductForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
  };

export default ProductForm;