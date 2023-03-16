import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

Product.PropTypes = {
  image: PropTypes.img.isRequired,
  title: PropTypes.string.isRequired,
  basePrice :PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,  
}

const Product = ({ title, basePrice, colors, sizes, name }) => {

  const [currentColor] = useState(colors[0]);
  const [currentSize] = useState(sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/${name}&${currentColor}`} />
      </div>
      <div>
        <header>
          <h2  className={styles.name}>{title}</h2>
          <span className={styles.price}>{basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => <li key={size}>
                <button onClick={() => currentSize(size.name)} className={ clsx(currentSize === size.name && styles.active) } type="button">{size.name}</button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => <li key={color}>
                <button type="button" onClick={() => currentColor(color)} className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}>{color}</button>
              </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;