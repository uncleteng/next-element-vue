import { defineComponent, inject } from 'vue';
import type { Ref } from 'vue';
import { ElIcon, ElTooltip, ElPopover } from 'element-plus';
import { Warning } from '@element-plus/icons-vue';
import { useLocale } from 'packages/hooks';
import type { ScaleTranslate, ScaleTranslateManager } from '../config';

export default defineComponent({
	props: {
		isFullscreen: {
			type: Boolean,
			default: false,
		},
		imageIndex: {
			type: Number,
			default: 0,
		},
		imageLength: {
			type: Number,
			default: 0,
		},
	},
	emits: ['fullscreen', 'save'],
	setup(props, { emit }) {
		const _ns = inject('ns', {} as any);
		const scaleTranslateManager = inject('scaleTranslateManager', {} as ScaleTranslateManager);
		const scaleTranslate: Ref<ScaleTranslate> = scaleTranslateManager.scaleTranslate;
		const { t } = useLocale();
		const switchFillscreen = (val: boolean) => {
			emit('fullscreen', val);
			if (val) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		};
		const renderContent = () => {
			return (
				<>
					<ul class={[_ns.be('header', 'tool')]}>
						<li class="tool-item" onClick={() => emit('save')}>
							<svg t="1719034799379" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4272" width="18" height="18">
								<path
									d="M831.4 252.2L711.5 132.4c-10.3-10.3-24.2-16.1-38.8-16.1h-450c-23.3 0-42.2 18.9-42.2 42.2v709.4c0 23.3 18.9 42.2 42.2 42.2h582.6c23.3 0 42.2-18.9 42.2-42.2V291c-0.1-14.5-5.8-28.5-16.1-38.8zM619.6 159v159.8c0 4-3.3 7.3-7.3 7.3H387.2c-4 0-7.3-3.3-7.3-7.3V159h239.7z m67.7 708.4H340.8v-292c0-3.9 3.2-7.1 7.1-7.1h332.4c3.9 0 7.1 3.2 7.1 7.1v292z m117.4 0H730v-292c0-27.5-22.3-49.8-49.8-49.8H347.8c-27.5 0-49.8 22.3-49.8 49.8v292h-74.7V159.1h113.9v159.8c0 27.6 22.4 50.1 50.1 50.1h225.1c27.6 0 50.1-22.4 50.1-50.1V159h10.4c3.2 0 6.3 1.3 8.6 3.6l119.9 119.9c2.3 2.3 3.6 5.3 3.6 8.6l-0.3 576.3z"
									p-id="4273"
								></path>
								<path d="M536 196.3h42.7v87.2H536zM368.7 641.2h220.7v42.7H368.7zM368.7 744h170.9v42.7H368.7z" p-id="4274"></path>
							</svg>
							<p class="label-text">{t('next.labelme.saveLabel')}</p>
						</li>
						<li class="tool-item">
							<svg t="1721826305513" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6215" width="18" height="18">
								<path
									d="M358.5 1021.5c-52.93 0-96-43.07-96-96 0-13.12 2.6-25.84 7.74-37.81l0.12-0.27-141.99-184.66-0.34 0.11a95.806 95.806 0 0 1-29.53 4.64c-52.93 0-96-43.07-96-96s43.07-96 96-96c7.56 0 15.09 0.89 22.41 2.64l0.36 0.09 213.67-370.08-0.16-0.25c-9.34-15.12-14.28-32.54-14.28-50.39 0-52.93 43.07-96 96-96 40.36 0 76.66 25.5 90.34 63.46l0.09 0.26 300.27 61.72 0.19-0.26c18.01-25.16 47.21-40.18 78.11-40.18 52.93 0 96 43.07 96 96 0 36.49-20.26 69.36-52.88 85.79l-0.31 0.16 41.76 393.5 0.25 0.12a96.184 96.184 0 0 1 39.11 34.79c9.85 15.41 15.06 33.27 15.06 51.65 0 52.93-43.07 96-96 96-31.18 0-60.53-15.24-78.52-40.76l-0.22-0.31-396.7 138.78-0.05 0.29c-8.2 45.76-47.94 78.97-94.5 78.97z m0-192c34.03 0 64.82 17.44 82.36 46.66l0.21 0.35L832.93 739.4l0.03-0.32c3.81-39.11 31.82-72.49 69.7-83.05l0.41-0.11-40.34-380.14-0.34-0.08c-39.73-9.82-68.86-43.81-72.49-84.56l-0.03-0.37-283.9-58.36-0.15 0.39c-7 17.7-19.01 32.81-34.72 43.69-16.08 11.13-34.96 17.02-54.59 17.02-9.75 0-19.37-1.46-28.59-4.33l-0.38-0.12L176.19 555.1l0.19 0.26c11.86 16.42 18.12 35.83 18.12 56.14 0 17.74-4.88 35.06-14.11 50.11l-0.18 0.29 136.28 177.25 0.37-0.18c13.04-6.28 27.05-9.47 41.64-9.47z"
									p-id="6216"
								></path>
								<path
									d="M416.5 2c40.15 0 76.26 25.37 89.87 63.13l0.19 0.53 0.55 0.11 299.68 61.6 0.64 0.13 0.38-0.53c8.66-12.1 20.19-22.15 33.34-29.06C854.71 90.77 870.06 87 885.5 87c52.66 0 95.5 42.84 95.5 95.5 0 18.03-5.05 35.58-14.6 50.77a95.81 95.81 0 0 1-38 34.57l-0.62 0.31 0.07 0.69 41.7 392.88 0.06 0.55 0.5 0.24c15.91 7.71 29.36 19.68 38.91 34.61 9.8 15.33 14.98 33.09 14.98 51.38 0 52.66-42.84 95.5-95.5 95.5-31.02 0-60.22-15.16-78.11-40.55l-0.43-0.62-0.71 0.25-396.09 138.59-0.55 0.19-0.1 0.57c-3.9 21.77-15.4 41.67-32.39 56.03-17.2 14.54-39.08 22.54-61.62 22.54-52.66 0-95.5-42.84-95.5-95.5 0-13.05 2.59-25.71 7.7-37.61l0.23-0.54-0.36-0.46-141.59-184.16-0.43-0.56-0.67 0.22A95.43 95.43 0 0 1 98.5 707C45.84 707 3 664.16 3 611.5S45.84 516 98.5 516c7.52 0 15.01 0.88 22.29 2.62l0.73 0.17 0.37-0.65 213.33-369.5 0.3-0.52-0.31-0.51c-9.29-15.04-14.2-32.37-14.2-50.12C321 44.84 363.84 2 416.5 2m0 191c-9.7 0-19.27-1.45-28.44-4.31l-0.76-0.24-0.4 0.69-210.98 365.43-0.32 0.56 0.38 0.52C187.77 571.99 194 591.3 194 611.5c0 17.64-4.85 34.88-14.03 49.85l-0.36 0.59 0.42 0.55 135.82 176.65 0.5 0.64 0.73-0.35c12.97-6.26 26.91-9.43 41.42-9.43 16.79 0 33.3 4.42 47.75 12.78a96.095 96.095 0 0 1 34.18 33.63l0.42 0.7 0.77-0.27 391.17-136.87 0.6-0.21 0.06-0.64c1.88-19.33 9.53-37.41 22.11-52.28 12.44-14.71 28.77-25.2 47.22-30.35l0.82-0.23-0.09-0.84-40.26-379.37-0.07-0.7-0.68-0.17c-39.52-9.77-68.5-43.58-72.11-84.12l-0.07-0.74-0.73-0.15-283.12-58.2-0.82-0.17-0.31 0.78c-6.96 17.61-18.91 32.64-34.54 43.46-15.99 11.11-34.77 16.96-54.3 16.96m0-192C363.2 1 320 44.2 320 97.5c0 18.58 5.26 35.93 14.35 50.65l-213.33 369.5A96.669 96.669 0 0 0 98.5 515C45.2 515 2 558.2 2 611.5S45.2 708 98.5 708a96.5 96.5 0 0 0 29.69-4.66l141.59 184.15c-5 11.66-7.78 24.51-7.78 38.01 0 53.3 43.2 96.5 96.5 96.5 47.46 0 86.91-34.25 94.99-79.39l396.08-138.59C867.04 828.81 895.88 845 928.5 845c53.3 0 96.5-43.2 96.5-96.5 0-38.22-22.23-71.26-54.46-86.88l-41.7-392.88C960.37 252.86 982 220.21 982 182.5c0-53.3-43.2-96.5-96.5-96.5-32.37 0-61.01 15.94-78.51 40.39l-299.68-61.6C493.91 27.59 458.31 1 416.5 1z m0 193c40.77 0 75.63-25.28 89.77-61.03l283.12 58.2c3.69 41.4 33.52 75.27 72.87 85l40.26 379.37c-37.74 10.53-66.15 43.41-70.06 83.49L441.29 875.9c-16.87-28.1-47.63-46.9-82.79-46.9-15 0-29.2 3.42-41.86 9.53L180.82 661.88c8.99-14.66 14.18-31.91 14.18-50.38 0-21.07-6.76-40.56-18.22-56.43l210.98-365.42c9.08 2.83 18.73 4.35 28.74 4.35z"
									p-id="6217"
								></path>
							</svg>
							<p class="label-text">{t('next.labelme.createPolygon')}</p>
						</li>
						<li class="tool-item">
							<svg t="1721826424613" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7356" width="18" height="18">
								<path
									d="M102.4 870.4v51.2h102.4v51.2H51.2v-102.4h51.2z m870.4-51.2v153.6h-102.4v-51.2h51.2v-102.4h51.2zM409.6 921.6v51.2H358.4v-51.2h51.2z m102.4 0v51.2H460.8v-51.2h51.2z m102.4 0v51.2h-51.2v-51.2h51.2z m102.4 0v51.2h-51.2v-51.2h51.2z m102.4 0v51.2h-51.2v-51.2h51.2zM307.2 921.6v51.2H256v-51.2h51.2z m204.8-742.4a51.2 51.2 0 0 1 51.0464 55.0912l118.8352 68.608a102.4 102.4 0 1 1 96.1536 157.3888v155.136a51.2 51.2 0 1 1-51.6096 80.0256L556.3392 793.6a51.2 51.2 0 1 1-88.7296 0.0512l-169.984-98.2016A51.1488 51.1488 0 0 1 204.8 665.6a51.2 51.2 0 0 1 41.1136-50.176V408.576a51.2 51.2 0 1 1 51.712-79.9744l163.3792-94.3616L460.8 230.4a51.2 51.2 0 0 1 45.2096-50.8416zM102.4 768v51.2H51.2v-51.2h51.2z m870.4-51.2v51.2h-51.2v-51.2h51.2zM297.0624 412.8768l0.1024 222.208 1.024 1.536L486.4 745.2672v-188.928a51.2 51.2 0 0 1-25.2416-38.4L460.8 512v-0.8704L297.0624 412.8768z m399.0528 18.432L563.2 511.1808 563.2 512a51.2 51.2 0 0 1-25.5488 44.3392l-0.0512 188.8768 188.2624-108.6976 0.9216-1.28V452.096a102.6048 102.6048 0 0 1-30.6688-20.7872zM102.4 665.6v51.2H51.2v-51.2h51.2z m870.4-51.2v51.2h-51.2v-51.2h51.2zM102.4 563.2v51.2H51.2v-51.2h51.2z m870.4-51.2v51.2h-51.2v-51.2h51.2zM102.4 460.8v51.2H51.2V460.8h51.2z m387.584-184.1664L326.6048 370.8928l160.6144 96.256a50.8416 50.8416 0 0 1 18.7904-5.9904L512 460.8c9.0112 0 17.5104 2.3552 24.832 6.4l132.9664-79.7184a102.4 102.4 0 0 1-4.0448-34.7648l-131.7888-76.032a50.9952 50.9952 0 0 1-43.9808 0zM972.8 409.6v51.2h-51.2V409.6h51.2zM102.4 358.4v51.2H51.2V358.4h51.2z m870.4-51.2v51.2h-51.2V307.2h51.2zM102.4 256v51.2H51.2V256h51.2z m870.4-51.2v51.2h-51.2V204.8h51.2zM153.6 51.2v51.2H102.4v102.4H51.2V51.2h102.4z m819.2 0v102.4h-51.2V102.4h-102.4V51.2h153.6z m-409.6 0v51.2h-51.2V51.2h51.2z m102.4 0v51.2h-51.2V51.2h51.2z m102.4 0v51.2h-51.2V51.2h51.2zM256 51.2v51.2H204.8V51.2h51.2z m102.4 0v51.2H307.2V51.2h51.2z m102.4 0v51.2H409.6V51.2h51.2z"
									p-id="7357"
								></path>
							</svg>
							<p class="label-text">{t('next.labelme.editPolygon')}</p>
						</li>
						<li class="tool-item">
							<svg t="1721826579655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10996" width="18" height="18">
								<path
									d="M847.743 223.953H640.639c-3.132-68.921-60.177-124.029-129.858-124.029s-126.726 55.108-129.858 124.029H173.256c-17.673 0-32 14.327-32 32s14.327 32 32 32h674.487c17.673 0 32-14.327 32-32s-14.327-32-32-32z m-336.962-60.03c34.379 0 62.689 26.426 65.718 60.029H445.064c3.029-33.603 31.338-60.029 65.717-60.029zM767.743 351.79c-17.673 0-32 14.327-32 32v478.173H288.256V383.79c0-17.673-14.327-32-32-32s-32 14.327-32 32v510.173c0 17.673 14.327 32 32 32h511.487c17.673 0 32-14.327 32-32V383.79c0-17.673-14.327-32-32-32z"
									p-id="10997"
								></path>
								<path
									d="M449.306 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999z m191.534 0V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999z"
									p-id="10998"
								></path>
							</svg>
							<p class="label-text">{t('next.labelme.deletePolyton')}</p>
						</li>
					</ul>
					<ul class={[_ns.be('header', 'tool')]}>
						<li class="hover" onClick={() => scaleTranslateManager.onResetScaleTranslate()}>
							<svg t="1725840994827" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6051" width="18" height="18">
								<path
									d="M322.794667 445.205333a34.133333 34.133333 0 0 1 2.218666 45.824l-2.218666 2.432a34.133333 34.133333 0 0 1-45.824 2.218667l-2.432-2.218667-149.333334-149.333333a34.133333 34.133333 0 0 1-2.218666-45.824l2.218666-2.432 149.333334-149.333333a34.133333 34.133333 0 0 1 50.474666 45.824l-2.218666 2.432-91.050667 91.050666L640 285.866667c160.234667 0 290.133333 129.898667 290.133333 290.133333 0 158.016-126.314667 286.506667-283.477333 290.048L640 866.133333H234.666667a34.133333 34.133333 0 0 1-3.114667-68.117333L234.666667 797.866667h405.333333c122.538667 0 221.866667-99.328 221.866667-221.866667 0-120.533333-96.106667-218.602667-215.850667-221.781333L640 354.133333l-408.256-0.021333 91.050667 91.093333z"
									p-id="6052"
								></path>
							</svg>
							<span style="padding-left: 3px">{t('next.labelimg.zoomRestore')}</span>
						</li>
						<li>
							<span>缩放比例</span>
							<span>{parseInt((scaleTranslate.value.scale * 100).toString())}%</span>
							<span style="padding: 0 10px;">偏移量</span>
							<span style="min-width: 120px; text-align: left;">
								X: {scaleTranslate.value.x}, Y: {scaleTranslate.value.y}
							</span>
						</li>
						{props.imageLength ? (
							<li>
								<span>第 {props.imageIndex + 1} 张</span>
								<em style="padding: 0 5px;">/</em>
								<span>共 {props.imageLength} 张</span>
							</li>
						) : null}
						<li style="margin-right: 30px;" class="tool-item">
							<ElPopover trigger="hover" placement="bottom" width="none">
								{{
									reference: () => (
										<div class="flex-center">
											<span style="padding-right: 3px">{t('next.labelimg.instructions')}</span>
											<ElIcon size={14}>
												<Warning />
											</ElIcon>
										</div>
									),
									default: () => (
										<ul style="font-size: 12px;white-space: nowrap;">
											<li>
												<span>A：</span>
												<span>A键进入上一张图片进行标注</span>
											</li>
											<li>
												<span>D：</span>
												<span>D键进入下一张图片进行标注</span>
											</li>
										</ul>
									),
								}}
							</ElPopover>
						</li>
						{props.isFullscreen ? (
							<li class="tool-item" onClick={() => switchFillscreen(false)}>
								<ElTooltip placement="top" content="取消全屏">
									<svg t="1719035442027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5388" width="18" height="18">
										<path
											d="M354.133333 682.666667H256v-42.666667h170.666667v170.666667H384v-98.133334L243.2 853.333333l-29.866667-29.866666L354.133333 682.666667z m358.4 0l140.8 140.8-29.866666 29.866666-140.8-140.8V810.666667h-42.666667v-170.666667h170.666667v42.666667h-98.133334zM354.133333 384L213.333333 243.2l29.866667-29.866667L384 354.133333V256h42.666667v170.666667H256V384h98.133333z m358.4 0H810.666667v42.666667h-170.666667V256h42.666667v98.133333L823.466667 213.333333l29.866666 29.866667L712.533333 384z"
											p-id="5389"
										></path>
									</svg>
								</ElTooltip>
							</li>
						) : (
							<li class="tool-item" onClick={() => switchFillscreen(true)}>
								<ElTooltip placement="top" content="全屏">
									<svg t="1719035375323" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5241" width="18" height="18">
										<path
											d="M285.866667 810.666667H384v42.666666H213.333333v-170.666666h42.666667v98.133333l128-128 29.866667 29.866667-128 128z m494.933333 0l-128-128 29.866667-29.866667 128 128V682.666667h42.666666v170.666666h-170.666666v-42.666666h98.133333zM285.866667 256l128 128-29.866667 29.866667-128-128V384H213.333333V213.333333h170.666667v42.666667H285.866667z m494.933333 0H682.666667V213.333333h170.666666v170.666667h-42.666666V285.866667l-128 128-29.866667-29.866667 128-128z"
											p-id="5242"
										></path>
									</svg>
								</ElTooltip>
							</li>
						)}
					</ul>
				</>
			);
		};
		return () => <>{renderContent()}</>;
	},
});
