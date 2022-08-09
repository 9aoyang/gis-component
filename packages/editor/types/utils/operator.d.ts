import { Id, MContainer, MNode } from '@tmagic/schema';
import { AddMNode, Layout, PastePosition } from '../type';
/**
 * 粘贴前置操作：返回分配了新id以及校准了坐标的配置
 * @param position 粘贴的坐标
 * @param config 待粘贴的元素配置(复制时保存的那份配置)
 * @returns
 */
export declare const beforePaste: (position: PastePosition, config: MNode[]) => Promise<MNode[]>;
/**
 * 新增元素前置操作，实现了在编辑器中新增元素节点，并返回新增元素信息以供stage更新
 * @param addNode 待添加元素的配置
 * @param parent 父级容器（可选）
 * @returns 新增的元素，父级元素，布局方式，是否为根页面
 */
export declare const beforeAdd: (addNode: AddMNode, parent?: MContainer | null) => Promise<{
    parentNode: MContainer;
    newNode: MNode;
    layout: Layout;
    isPage: boolean;
}>;
/**
 * 将元素粘贴到容器内时，将相对于画布坐标转换为相对于容器的坐标
 * @param position PastePosition 粘贴时相对于画布的坐标
 * @param id 元素id
 * @returns PastePosition 转换后的坐标
 */
export declare const getPositionInContainer: (position: PastePosition | undefined, id: Id) => {
    left: number;
    top: number;
};
/**
 * 将新增元素事件通知到stage以更新渲染
 * @param parentNode 父元素
 * @param newNode 当前新增元素
 * @param layout 布局方式
 */
export declare const notifyAddToStage: (parentNode: MContainer, newNode: MNode, layout: Layout) => Promise<void>;
/**
 * 删除前置操作：实现了在编辑器中删除元素节点，并返回父级元素信息以供stage更新
 * @param node 待删除的节点
 * @returns 父级元素，root根元素
 */
export declare const beforeRemove: (node: MNode) => Promise<MContainer | void>;
