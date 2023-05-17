@Entity('products', { schema: 'ventas' })

export class ProductEntity{
    @PrimaryGenerateColumn({
        id:string,
    })

    @CreateDateColumn({
        name:'Created_at',
        type: 'timestampz',
        default:() => 'CURRENT_TIMESTAMP,'
    })
    createAT: Date

    @updateDateColumn({
        name:'update_at',
        type: 'timestampz',
        default:() => 'CURRENT_TIMESTAMP,'
    })
   updateAt: Date

  @DeleteDateColumn({
    name:'delete_at',
    type:'timestampz',
    default:() => 'CURRENT_TIMESTAMP,'
   })
    
}